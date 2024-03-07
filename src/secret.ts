require("dotenv").config();

const serverPort: number = parseInt(process.env.PORT || "5100", 10);

export { serverPort };