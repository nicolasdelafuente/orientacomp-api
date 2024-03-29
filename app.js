require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./src/config/connect.js");

const router = express.Router();

const port = process.env.PORT || 4000;
const publicUrl = process.env.PUBLIC_URL || "http://127.0.0.1:"

app.use(cors());
app.use(express.json());
app.use("/orientacomp-api/", require("./src/routes"));

app.listen(port, () => {
    console.log(`The server has started successfully at ${publicUrl}${port}`);
    console.log(`The documentation is available at ${publicUrl}5500/docs/index.html`);

    sequelize.sync({ force: false }).then(() => {
        console.log("The connection has been established");
    });
});

module.exports = app;