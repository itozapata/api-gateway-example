const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const awsServerlessMiddleware = require("aws-serverless-express/middleware");

const app = express();
const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessMiddleware.eventContext());

router.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/", router);

module.exports = app;
