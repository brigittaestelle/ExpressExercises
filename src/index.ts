import express from "express";
import routes from "../routes/routing";
import path from "path";
const app = express();

const port = 3000;

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
app.use(express.json());
app.use(routes);
