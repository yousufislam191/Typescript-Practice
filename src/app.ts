import express,{Application, Request, Response} from "express";
import cors from "cors";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server home route updated.");
});

export { app };
