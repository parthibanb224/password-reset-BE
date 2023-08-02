var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'parthibanb224@gmail.com',
    pass: 'jqbnlshntwpxvckc'
  }
});

var mailOptions = {
  from: 'parthibanb224@gmail.com',
  to: 'parthibanb224@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});





// loginRouter.put("/forgot", async (req, res) => {
//     try {
//       const { mail } = req.body;
//       if (!mail) {
//         res.status(400).json({ Err: "please enter valid email" });
//         return;
//       }
//       const matchedUser = await userModel.findOne({ mail });
//       if (!matchedUser) {
//         res.status(400).json({ Err: "user not found exists" });
//         return;
//       }
  
//       const randomString =
//         Math.random().toString(36).substring(2, 15) +
//         Math.random().toString(36).substring(2, 15);
//       const link = `https://login-page-fe.netlify.app/users/reset/${randomString}`;
  
//       matchedUser.resetToken = randomString;
//       await userModel.findByIdAndUpdate(matchedUser._id, matchedUser);
  
//       //sending email for resetting
  
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: 'parthibanb224@gmail.com',
//           pass: 'mwwbebekljnagzro'
//         },
//       });
  
//       const sendMail = async () => {
//         const info = await transporter.sendMail({
//           from: '"parthiban" <parthibanb224@gmail.com>',
//           to: matchedUser.mail,
//           subject: "Reset Password",
//           text: link,
//         });
//       };
  
//       sendMail()
//         .then(() => {
//           return res
//             .status(201)
//             .json({ message: `Mail has been send to ${matchedUser.mail}` });
//         })
//         .catch((err) => { console.log(err); res.status(500).json({ Error: err }) });
//     } catch (error) {
//       console.log(error)
//       return res.status(500).json({ Error: error });
//     }
//   });