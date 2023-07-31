const loginRouter = require('express').Router();
const userModel = require('../models/Users.models');
const {comparePasswords} = require('../utils/Auth.utils')

loginRouter.post("/", async (req, res, next) => {
    const { mail, password } = req.body;
    userModel.findOne({ mail: mail })
      .then(async (cursor) => {
        if (cursor && cursor._id) {
          const isMatching = await comparePasswords(password, cursor.password);
          if (isMatching) {
            return res.status(200).json({
              success: true,
              message: "Login Successful!!",
            });
          } else {
            return res.status(200).json({
              success: false,
              message: "Email or Password is wrong, Try Again!!",
            });
          }
        } else {
          return res.status(200).json({
            success: true,
            message:
              "Account Does not Exists, Please create your account to continue!!",
          });
        }
      })
      .catch((err) => {
        return res.status(401).json({
          success: false,
          message: "Error Fetching Users Data!!!",
          error: err,
        });
      });
  });

  module.exports = loginRouter;