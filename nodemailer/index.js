const nodemailer = require("nodemailer");

// 교재 261p
const config = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: { user: process.env.GOOGLE_MAIL, pass: process.env.GOOGLE_PASSWORD },
};

const send = async (data) => {
  const transporter = nodemailer.createTransport(config);
};