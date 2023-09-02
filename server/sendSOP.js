const { sendBasicEmail } = require("./mailer");
const generateStatement = require("./generateStatement");

function sendSOP(req, res) {
  console.log(req.body);
  try {
    const letterContent = generateStatement(req.body);
    sendBasicEmail(
      "sender",
      req.body.email,
      "Testing mailing service",
      letterContent
    );
    return res.status(201).json({
      success: true,
      data: "Mail was sent to the given id",
      err: {},
      message: "Successfully sent the SOP Statement.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: "response",
      err: error,
      message: "Unable to send SOP statement.",
    });
  }
}

module.exports = sendSOP;
