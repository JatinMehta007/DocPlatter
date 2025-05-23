// const express = require("express");
// const jwt = require("jsonwebtoken");
// const { PrismaClient } = require("@prisma/client");
// const authenticateToken = require("../middlewares/authenticate");
// const prisma = new PrismaClient();
// const router = express.Router();

// router.post("/mydata",authenticateToken, async (req, res) => {
//   try {
//     const patients = await prisma.patients.findMany({
//       where: {
//         userId: req.userId,
//       },
//       select: {
//         id: true,
//         username: true,
//         diseases: true,
//         allergies: true,
//         age: true,
//         gender: true,
//         contact_information: true,
//         room_number: true,
//         bed_number: true,
//         floor_number: true,
//         patient_Diet: {
//           select: {
//             morning_meal: true,
//             evening_meal: true,
//             night_meal: true,
//             ingredients: true,
//             instruction: true,
//             date: true,
//           },
//         },
//       },
//     });
//     res.status(200).json({
//       message: "User specific data fetched successfully",
//       data: patients,
//     });
//   } catch (error) {
//     console.error("Error fetching user data ", error);
//     res.status(500).json({
//       message: "Server error",
//     });
//   }
// });
