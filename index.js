import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

const PORT = 777;
dotenv.config(); // require("dotenv").config();

const app = express();

app.use(cors());

const URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

app.get("/", async (req, res) => {
  const { query } = req.query;
  if (query){
    try {
    const response = await axios.get(URL, {
      params: {
        query,
        apiKey: API_KEY,
      },
    });
    const data = response.data.results;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
  }
  else{
    try {
      const response = await axios.get(URL, {
        params: {
          apiKey: API_KEY,
        },
      });
      const data = response.data.results;
      res.json(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.listen(777, () => console.log(`Server is running on port ${PORT}`));
