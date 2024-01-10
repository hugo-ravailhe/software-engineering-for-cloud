const db = require("../config/db.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

    console.log("Register");
    console.log(req.body);

    //Check if user exists
    const q = "SELECT * FROM `Account` WHERE `email`=?";
    db.query(q, [req.body.email], (err, data) => {
        if(err) {
            console.log(err);
            return res.json({error: err})
        };
        if (data.length) {
            console.log(`User ${req.body.email} already exists`);
            return res.status(409).json({error: "User already exists"})
        };

        //Hash password and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO `Account` (`email`, `password_hash`, `firstname`, `lastname`, birthdate) VALUES (?, ?, ?, ?, ?)";
        const values = [
            req.body.email,
            hash,
            req.body.prenom,
            req.body.nom,
            req.body.dateNaissance
        ]

        db.query(q, values, (err, data) => {
            if(err) {
                console.log(err);
                return res.json({error: err})
            };
            console.log(`User ${req.body.email} created`);
            return res.status(201).json({message: "User created"});
        });
    });
};

const login = async (req, res) => {

    console.log("Login");
    console.log(req.body);

    // Check if user exists
    console.log("Login")
    const q = "SELECT * FROM `Account` WHERE `email`=?";
    db.query(q, [req.body.email], (err, data) => {
        if(err) {
            console.log(err);
            return res.json({error: err})
        };
        if (!data.length) {
            console.log(`User ${req.body.email} does not exist`);
            return res.status(404).json({error: "User does not exist"})
        };
        
        // Check password
        const isPasswordValid = bcrypt.compareSync(req.body.password, data[0].password_hash);
        if (!isPasswordValid) {
            console.log(`Invalid password for user ${req.body.email}`);
            return res.status(401).json({error: "Invalid password"})
        };

        const token = jwt.sign({id:data[0].id}, "jwtkey", {expiresIn: 86400});
        const { password_hash, ...user } = data[0];

        console.log(`User ${req.body.email} logged in`);
        res.cookie("access_token", token, {
            httpOnly: true, 
            sameSite: true,
        }).status(200).json(user);
    });
};

const logout = async (req, res) => {

    console.log("Logout");
    console.log(req.body);

    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).json({message: "User logged out"});
};

module.exports = {
    register,
    login,
    logout
  };