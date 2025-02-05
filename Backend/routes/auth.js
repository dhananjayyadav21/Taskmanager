const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
require("dotenv").config();

const router = express.Router();
const AuthToken_Secrate = process.env.AUTHTOKEN_SECRATE;

//Create a user using POST:/api/auth/createuser ==========================================================
router.post(
  "/createuser",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("User name should be minimum 3 characters required!"),
    body("email")
      .isEmail()
      .withMessage("User email must be email required!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password should be minimum 5 characters required!"),
  ],
  async (req, res) => {
    // if accured validation errors , send bad request
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
      return res.status(400).json({ errors: validationErrors.array() });

    try {
      const userReqBody = req.body;

      // if user alrady register withi this email
      let user = await User.findOne({ email: userReqBody.email });
      if (user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Alrady register with this email" });
      }

      // genrate secure password using hashing and store in db using Use model
      const Salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(userReqBody.password, Salt);

      user = await User.create({
        name: userReqBody.name,
        email: userReqBody.email,
        password: securePassword,
      });

      // genrate AuthToken for check authentication and aprove for certain event
      const Data = {
        user: {
          id: userReqBody.id,
        },
      };

      const AuthToken = jwt.sign(Data, AuthToken_Secrate);
      success = true;
      res.send({success,AuthToken });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send("some internal server error accrued for Authentication");
    }
  }
);

//Create a user using POST:/api/auth/login ==========================================================
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("email must be email required!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password should be minimum 5 characters required!"),
  ],
  async (req, res) => {
    // if accured validation errors , send bad request
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
      return res.status(400).json({ errors: validationErrors.array() });

    try {

      const { email, password} = req.body;

      //check user exist or not
      let user = await User.findOne({email: email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "plese try with right credentials" });
      }

      const PasswordCompare = await bcrypt.compare(password, user.password );
      if (!PasswordCompare) {
        success = false;
        return res
          .status(400)
          .json({ error: "plese try with right credentials" });
      }


      //create auth token for login user 
       const Data = {
        user:{
          id:user.id
        },
       };

       const AuthToken = jwt.sign(Data, AuthToken_Secrate);
       success = true;
       res.send({success, AuthToken});

    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send("some internal server error accrued for authentication");
    }
  }
);


//getdetails of user using 3. POST:/api/auth/getUser ==========================================================
router.post('/getUser',fetchUser, async (req,res)=>{
  try {
    
    //find user details from db
    let userId = req.user.id;

    const user = await User.findById(userId).select('-password');
    success = true;
    res.send(user);

  } catch (error) {
    success = false;
    console.error(error.message);
      res.status(500).send("some internal server error accrued for getting your profile ");
  }
})

//get user of user using  4. POST:/api/auth/getAllUser ==========================================================
router.get('/getAllUser', async (req,res)=>{
  try {
   
    const user = await User.find().select('-password');
    success = true;
    res.send(user);

  } catch (error) {
    success = false;
    console.error(error.message);
      res.status(500).send("some internal server error accrued for getting users ");
  }
})


module.exports = router;
