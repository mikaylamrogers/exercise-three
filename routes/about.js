const express = require("express");

const router = express.Router();

// this will look for /about/
router.get("/", (req, res) => res.send("About This Page: Exercise Three"));
router.get("/me", (req, res) => res.send("About Me: Exercise Three"));
router.get("/json", (req, res) =>
    res.send([{ itemOne: "cool", itemTwo: "cooler" }])
);

module.exports = router;