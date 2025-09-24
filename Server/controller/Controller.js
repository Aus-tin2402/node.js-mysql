const db = require("../db/DB");
const nodemailer = require("nodemailer");

const mail = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER || "austinjosedavid@gmail.com",
    pass: process.env.MAIL_PASS || "bscmlykymoqhwtpv",
  },
});

const mailsend = async (to, subject, text) => {
  try {
    let mailres = await mail.sendMail({
      from: process.env.MAIL_USER,
      to: to,
      subject: subject,
      text: text,
    });
    console.log("Mail sent successfully:", mailres.messageId);
    return true;
  } catch (error) {
    console.error("Mail sending failed:", error);
    return false;
  }
};
const register = (req, res) => {
  const { email, fname, lname, password } = req.body;
  console.log({ email, fname, lname, password });

  db.query(
    "INSERT INTO `user` (email, fname, lname, password) VALUES (?, ?, ?, ?)",
    [email, fname, lname, password],
    async (err, result) => {
      if (err) {
        console.error("DB Insert Error:", err);
        return res.status(500).json({ msg: "Register Failed", data: null });
      }
      const mailStatus = await mailsend(
        email,
        "Mail From Application",
        "❤️ Registration Successfully Completed ❤️"
      );

      if (!mailStatus) {
        return res.status(500).json({
          msg: "User Registered but Mail Sending Failed",
          data: { email, fname, lname, password },
        });
      }

      res.status(201).json({
        msg: "Registration Successfully Completed & Mail Sent",
        data: { email, fname, lname, password },
      });
    }
  );
};

const login = (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  console.log(email, password);

  db.query(
    `Select * from user where email=? and password=?`,
    [email, password],
    (err, result) => {
      if (err) res.status(500).json({ msg: "Login Failed", data: null });
      else
        res
          .status(200)
          .json({ msg: "Login Sucessfully Completed", data: result });
    }
  );
};

const getAll = (req, res) => {
  db.query(`Select * from user`, (err, result) => {
    if (err) res.status(500).json({ msg: "Not Able To Calll", data: null });
    else
      res.status(201).json({ msg: "Data Detched Sucessfully", data: result });
  });
};

const deleteWork = (req, res) => {
  const email = req.params.email;
  db.query(`delete from user where email=? `, [email], (err, result) => {
    if (err) res.status(500).json({ msg: "Email Not Found", data: null });
    else res.status(201).json({ msg: "Delete Sucessfully", data: result });
  });
};

const updateWork = (req, res) => {
  const { email, fname, lname, password } = req.body;
  console.log({ email, fname, lname, password });
  db.query(
    `update user set fname=? , lname=? , password=? where email= ? `,
    [fname, lname, password, email],
    (err, result) => {
      if (err){ console.log(err);
       res.status(500).json({ msg: "Email Not Found", data: null });}
      else res.status(201).json({ msg: "Update Sucessfully", data: result });
    }
  );
};
module.exports = { register, login, getAll, updateWork, deleteWork };
