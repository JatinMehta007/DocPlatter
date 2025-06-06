const express = require('express');
const PORT = process.env.PORT || 3000
const cors = require('cors');
const rootRouter = require("./routes/index1");
const app = express();

// app.use(cors({
//     origin: '*' 
// }));
const allowedOrigins = [
  "http://localhost:5173", 
  "https://docplatter-jatinmehta.vercel.app" 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use("/api/v1",  rootRouter);

app.get("/", (req, res) => {
    res.send("hello from backend!");
  });

app.listen(PORT, () => {
    console.log("Server running on port",PORT);
});