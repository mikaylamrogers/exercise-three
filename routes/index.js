const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Page: Routed Exercise Three");
});

module.exports = router;