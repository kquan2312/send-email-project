const express = require("express");
const dotenv = require("dotenv");
const mailRoutes = require("./routes/mail.routes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", mailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
