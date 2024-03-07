import express,{Application, Request, Response} from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server home route updated again.");
});

export { app };
