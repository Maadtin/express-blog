const express = require("express");
const expresshbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.engine(
  "handlebars",
  expresshbs({
    defaultLayout: "main",
    partialsDir: `${__dirname}/views/partials`
  })
);
app.set("view engine", "handlebars");

const authController = require("./controllers/AuthController");

app.get("/registro", authController.registro);

app.use((req, res, next) => {
  res.render("404");
});

app.listen(PORT, () => console.log("Server running on http://localhost:5000"));
