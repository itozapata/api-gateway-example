import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import awsServerlessMiddleware from "aws-serverless-express/middleware";

const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessMiddleware.eventContext());

router.get("/", (reqm, res) => {
  return res.json({ hello: "world" });
});

app.use("/", router);

export default app;
