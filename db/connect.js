const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://Maon:Tnhr123789!@cluster0.nexcvea.mongodb.net/Task-Manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
