import express = require("express");

const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.json({name: "Prabhat Ranjan", role: 'Admin'});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`);
});
