const express = require("express");
const swaggerUI = require("swagger-ui-express");
const data = require("./swagger.json");
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(data));

app.get("/test/:username", (req, res) => {
  if (req.body) {
    let test = req.params.username;
    console.log(test)
    if (test) {
      res.status(200).json({
        status: "SUCCESS",
        message: `${test}`,
      });
    } else if (!test) {
      res.status(400).json({
        status: "FAIL",
        toast: "Missing parameter",
      });
    }
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
