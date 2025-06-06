const express = require('express');
const PORT = process.env.PORT || 3000
const cors = require('cors');
const rootRouter = require("./routes/index1");
const app = express();

// app.use(cors({
//     origin: '*' 
// }));

app.use(cors({
    origin: "https://docplatter-jatinmehta.vercel.app/",  
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