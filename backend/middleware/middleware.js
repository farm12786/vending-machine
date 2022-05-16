const moment = require("moment");

const middleware = (req, res, next) => {
  console.log(
    "REQUEST : " +
      `${req.method} ${req.protocol}://${req.get("host")}${
        req.originalUrl
      } AT ${moment().format().split("T")[0]} ${
        moment().format().split("T")[1].split("+")[0]
      }`
  );
  // next();
  console.log(req.headers["x-authorization"]);
  if (req.headers.authorization === process.env.HEADER_AUTHEN) {
    next();
  } else {
    console.log("REQUEST ERROR : 403");
    res.status(403);
    res.json({
      status: 403,
    });
  }
};

module.exports = middleware;
