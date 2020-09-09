const express = require("express");
const app = express();
const router = require("./app.router");
const hbs = require("express-hbs");

// setup engine
app.engine("hbs", hbs.express4({
    partialsDir:[`${process.cwd()}/views/partials`],
    defaultLayout:`${process.cwd()}/views/layouts/main.hbs`
}));
app.set("view engine", "hbs");
app.set("views", `${process.cwd()}/views`);

app.use(express.static(`${process.cwd()}/public`));

app.use(router);

module.exports = app;