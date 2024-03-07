import { app } from "./app";
import { serverPort } from "./secret";

app.listen(serverPort, async () => {
  console.log(`Server is listening port http://localhost:${serverPort}`);
});