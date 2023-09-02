const { sendBasicEmail } = require("./mailer");
const generateStatement = require("./generateStatement");

function sendSOP(req, res) {
  try {
    const letterContent = generateStatement({});
    sendBasicEmail(
      "sender",
      "20r01a6720@cmritonline.ac.in",
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
