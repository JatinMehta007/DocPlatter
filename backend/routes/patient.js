const express = require('express');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

router.post("/insert", async (req, res) => {
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
                contact_information
            }
        });

        const token = jwt.sign({ userId: user.id }, JWT_SECRET); 

        res.status(201).json({
            message: "User created successfully",
            token: token
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get('/patients', async(req,res)=>{
     try{
        const patients = await prisma.patients.findMany({
            select:{
                username:true,
            }
        });
        res.json(patients);
     } catch(error){
        console.log(error);
        res.status(500).json({
            message : "Error fetching Patients"
        })
     }
})

router.post("/meals",async (req,res)=>{
     const {patientName,morningMeal,eveningMeal,nightMeal,ingredients,instruction,date} = req.body;

     try{
        const patient = await prisma.patients.findUnique({
            where : {username:patientName},
        });
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




// router.get("/mealdetails", async (req, res) => {
//     try {
//       const patients = await prisma.patients.findMany({
//         select: {
//           username: true,
//           id: true,
//         },
//       });
  
//       if (patients.length > 0) {
//         const mealDetailsPromises = patients.map(async (patient) => {
//           const mealDetails = await prisma.patient_Diet.findMany({
//             where: {
//               patientId: patient.id,
//             },
//             select: {
//               morning_meal: true,
//               evening_meal: true,
//               night_meal: true,
//               ingredients: true,
//               instruction: true,
//             },
//           });
//           return {
//             patientName: patient.username,
//             mealDetails,
//           };
//         });
  
//         const mealDetailsResults = await Promise.all(mealDetailsPromises);
  
//         res.status(200).send({
//           message: "Meal details fetched successfully",
//           mealDetails: mealDetailsResults,
//         });
//       } else {
//         res.status(404).send({
//           message: "No patients found",
//         });
//       }
//     } catch (error) {
//       console.log("Error fetching meal data:", error);
//       res.status(500).send({
//         message: "Server error",
//       });
//     }
//   });

// router.get("/mealdetails", async (req, res) => {
//     try {
//       const patients = await prisma.patients.findMany({
//         select: {
//           username: true,
//           id: true,
//         },
//       });
  
//       if (patients.length > 0) {
//         const mealDetailsPromises = patients.map(async (patient) => {
//           const mealDetails = await prisma.patient_Diet.findMany({
//             where: {
//               patientId: patient.id,
//             },
//             select: {
//               morning_meal: true,
//               evening_meal: true,
//               night_meal: true,
//               ingredients: true,
//               instruction: true,
//             },
//           });
  
//           if (mealDetails.length > 0) {
//             return {
//               patientName: patient.username,
//               mealDetails,
//             };
//           } else {
//             return null; // ❌ no meal, don't include
//           }
//         });
  
//         const allResults = await Promise.all(mealDetailsPromises);
//         const filteredResults = allResults.filter((item) => item !== null); // ✅ only users with meals
  
//         if (filteredResults.length > 0) {
//           res.status(200).send({
//             message: "Meal details fetched successfully",
//             mealDetails: filteredResults,
//           });
//         } else {
//           res.status(404).send({
//             message: "No patients with meals found",
//           });
//         }
//       } else {
//         res.status(404).send({
//           message: "No patients found",
//         });
//       }
//     } catch (error) {
//       console.log("Error fetching meal data:", error);
//       res.status(500).send({
//         message: "Server error",
//       });
//     }
//   });

router.get("/mealdetails", async (req, res) => {
    try {
      const patients = await prisma.patients.findMany({
        select: {
          username: true,
          id: true,
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
            date:true
          },
        });
  
        if (mealDetails.length > 0) {
          return {
            patientName: patient.username,
            mealDetails,
          };
        } else {
          return null; // no meals, skip this patient
        }
      });
  
      const allResults = await Promise.all(mealDetailsPromises);
      const filteredResults = allResults.filter((item) => item !== null);
  
      res.status(200).send({
        message: "Meal details fetched successfully",
        mealDetails: filteredResults,
      });
    } catch (error) {
      console.log("Error fetching meal data:", error);
      res.status(500).send({ message: "Server error" });
    }
  });
  module.exports = router;
