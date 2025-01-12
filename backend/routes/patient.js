const express = require('express');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// POST: Insert patient data and create JWT token
router.post("/insert", async (req, res) => {
    try {
        const { username, diseases, allergies, room_number, bed_number, floor_number, age, gender, contact_information } = req.body;

        // Validate required fields
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

        const token = jwt.sign({ userId: user.id }, JWT_SECRET); // Sign only user ID or minimal data

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

module.exports = router;
