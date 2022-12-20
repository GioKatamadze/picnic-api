import { Express } from "express";
import cors from "cors";
import csvParser from "csv-parser";
import fs from "fs";

const app = express();
const results = [];

app.use(cors());
app.get("/", (_, res) => {
  fs.createReadStream("./data/Whatsgoodly-10.csv")
    .pipe(csvParser)
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.status(200).json(results);
    });
});
app.listen(process.env.PORT || 5000);
