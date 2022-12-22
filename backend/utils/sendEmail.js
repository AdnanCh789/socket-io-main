// const nodemailer = require("nodemailer");
// const config = require("config");

// const sendEmail = async (options) => {
//   // let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     service: config.get("SERVICE"),
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,

//     auth: {
//       user: config.get("USER_GMAIL"),
//       pass: config.get("USER_PASS"),
//     },
//   });

//   const message = {
//     from: config.get("USER_GMAIL"),
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   await transporter.sendMail(message);
// };

// module.exports = sendEmail;
