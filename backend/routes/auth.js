const express = require('express');
const { register, login, logout } = require('../controllers/auth.js');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("It's working !")
});
router.post("/register",register );
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;