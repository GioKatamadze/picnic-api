import express from "express";
import cors from "cors";
import csvParser from "csv-parser";
import fs from "fs";

const app = express();

app.get("/", cors(), (_, res) => {
  const results = [];
  fs.createReadStream("./src/data/WhatsgoodlyData-10.csv")
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.status(200).json(results);
    });
});
app.listen(process.env.PORT || 3000);
