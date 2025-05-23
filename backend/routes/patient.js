const express  = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  brcypt  = require("bcrypt");
const { z } = require("zod");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticate");

const signupSchema = z.object({
  username  : z.string().nonempty(1,"Username is required"),
  email     : z.string().email("Invalid email address","email is required"),
  password  : z.string().min(6,"Password atleast 6 characters long"),
});


router.post("/mydata", authenticateToken, async (req, res) => {
  try {
    const patients = await prisma.patients.findMany({
      where: {
        userId: req.userId, // only patients of logged-in user
      },
      select: {
        id: true,
        username: true,
        diseases: true,
        allergies: true,
        age: true,
        gender: true,
        contact_information: true,
        room_number: true,
        bed_number: true,
        patient_diets: {
          select: {
            morning_meal: true,
            evening_meal: true,
            night_meal: true,
            ingredients: true,
            instruction: true,
            date: true,
          },
        },
      },
    });
    res.status(200).json({
      message: "User specific data fetched successfully",
      data: patients,
    });
  } catch (error) {
    console.error("Error fetching user data ", error);
    res.status(500).json({
      message: "Server error",
    });
  }
});


router.post("/create",async(req,res)=>{ 
    try{
      const parsedData = signupSchema.safeParse(req.body);
      if(!parsedData.success){
        const errors = parsedData.error.flatten().fieldErrors;
        return res.status(400).json({ message  : "Validation failed", errors});
      }

      const { username , email , password } = parsedData.data;

      const existigUser = await prisma.user.findUnique({
        where:{ email },
      })

      if(existigUser){
        return res.status(400).json({ message : "User already exist with this email"})
      }

      const hashedPassword = await brcypt.hash(password,10);

      const signup  = await prisma.user.create({
        data:{
          username,
          email,
          password : hashedPassword
        }
      });

      const token = jwt.sign({ userId : signup.id} , JWT_SECRET , { expiresIn :"7d"});
      console.log("the user details are",signup );
      res.status(201).json({
        message : "Signup successfull",
        token
      })
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Server error" });
  }
})


router.post("/login",async(req,res)=>{
  const {email,password} = req.body;
   try{
    const users = await prisma.user.findUnique({
      where:{
        email
      },
    });
    
    if(!users){
      return res.status(400).json({ message  : "User not found"});
    }

    const isPasswordValid  = await brcypt.compare(password , users.password);

    if(!isPasswordValid){
      return res.status(401).json({ message : "Invalid password"});
    }

    const token = jwt.sign({userId : users.id},JWT_SECRET,{
      expiresIn:"7d",
    })

    
    return res.status(200).json({
      message : "Login successfully",
      token
    })
   } catch (error) {
    console.error("Login error:", error);
   return res.status(500).json({ message: "Server error" });
  
   }
})


// Fetch all patients for logged-in user
router.get('/patients', authenticateToken, async (req, res) => {
  try {
    const patients = await prisma.patients.findMany({
      where: { userId: req.userId },
      select: { id: true, username: true }
    });
    res.json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Error fetching patients" });
  }
});

router.post("/insert",authenticateToken, async (req, res) => {
    try {
        const { username, diseases, allergies, room_number, bed_number, floor_number, age, gender, contact_information } = req.body;

        if (!username || !diseases || !age || !gender) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = await prisma.patients.create({
            data: {
                username,
                diseases,
                allergies,
                room_number,
                bed_number,
                floor_number,
                age,
                gender,
                contact_information,
                userId : req.userId
            }
        });

        const token = jwt.sign({ userId: user.id }, JWT_SECRET); 

        res.status(201).json({
            message: "User created successfully",
            token: token
        });
        // console.log("the token ius : ",token);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
});




router.post("/meals",authenticateToken,async (req,res)=>{
     const {patientName,morningMeal,eveningMeal,nightMeal,ingredients,instruction,date} = req.body;

     try{
        const patient = await prisma.patients.findFirst({
            where : {
              username:patientName,
              userId : req.userId
            },
        });
        if (!patient) {
      return res.status(404).json({ message: "Patient not found or unauthorized" });
    }
        if(patient){
            const meal = await prisma.patient_Diet.create({
                data:{
                    morning_meal:morningMeal,
                    evening_meal:eveningMeal,
                    night_meal:nightMeal,
                    ingredients,
                    instruction,
                    date:date,
                    patientId:patient.id,
                },
            })
            res.status(200).send({
                message  : "Meal data added successfully",
                meal
            })
        } else{
            res.status(404).send({
                messsage:"Patient not found"
            })
        }
     } catch(error){
        console.log("error adding meal data:", error);
        res.status(500).send({
            message:"server error"
        })
     }
})



router.get("/mealdetails",authenticateToken, async (req, res) => {
    try {
      const patients = await prisma.patients.findMany({
        where:{ userId : req.userId },
        select: {
          id: true,
          username: true,
        },
      });
      const mealDetailsPromises = patients.map(async (patient) => {
        const mealDetails = await prisma.patient_Diet.findMany({
          where: {
            patientId: patient.id,
          },
          select: {
            morning_meal: true,
            evening_meal: true,
            night_meal: true,
            ingredients: true,
            instruction: true,
            date:true,
            id:true
          },
        });
        
        if (mealDetails.length > 0) {
          return {
            id : patient.id,
            patientName: patient.username,
            mealDetails,
          };
        } else {
          return null; // no meals, skip this patient
        }
      });
      
      const allResults = await Promise.all(mealDetailsPromises);
      const filteredResults = allResults.filter((item) => item !== null);
      console.log("patient data", patients);

      res.status(200).send({
        message: "Meal details fetched successfully",
        mealDetails: filteredResults,
      });
    } catch (error) {
      console.log("Error fetching meal data:", error);
      res.status(500).send({ message: "Server error" });
    }
  });





  router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
  
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
  
    try {
      const patient = await prisma.patients.findUnique({
        where: { 
          id,
          userId : req.userId,
         },
      });
  
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
  
      // Delete related meals FIRST (required because of foreign key constraint)
      const deletedMeal = await prisma.patient_Diet.deleteMany({
        where: { patientId: id },
      });
  
      // Then delete the patient
      const deletedPatient = await prisma.patients.delete({
        where: { id },
      });
  
      res.status(200).json({
        message: "Patient deleted successfully",
        deletedPatient,
        deletedMeal
      });
  
    } catch (error) {
      console.error("Error deleting patient:", error.message, error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  router.delete("/meal/:id",authenticateToken,async (req,res)=>{
    const id = Number(req.params.id);

    // console.log("the id is you seen :",id);
    // console.log("req.params.id:", req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
  
    try{
      const meal = await prisma.patient_Diet.findFirst({
          where:{id}
      })

      if(!meal){
        return res.status(404).json({ message: "Patient not found" });
      }

      const deletedMeal = await prisma.patient_Diet.delete({
        where: { id },
      });
      res.status(200).json({
        message: "Patient deleted successfully",
        deletedMeal
      });
  
    } catch (error) {
      console.error("Error deleting patient:", error.message, error);
      res.status(500).json({ message: "Internal server error" });
    }
    
  })

  module.exports = router;
