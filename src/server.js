import { Express } from "express";
import cors from "cors";
import csvParser from "csv-parser";
import fs from "fs";

const app = express();
const results = [];

fs.createReadStream("./data/Whatsgoodly-10.csv")
  .pipe(csvParser)
  .on("data", (data) => results.push(data))
  .on("end", _);
