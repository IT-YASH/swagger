const express = require("express");
const swaggerUI = require("swagger-ui-express");
const data = require('./swagger.json');
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(data));

// let users = [{name: "yash" }, {name: "devansh" }];

app.get("/test", (req, res) => {
  // let firstname;
  if (req.body) {
    console.log(req.body)
    let firstname = req.body.username
    if (!firstname) {
      res.status(400).json({
        status: "FAIL",
        toast: "Missing parameter",
      });
    } else if (firstname) {
      res.status(200).json({
        status: "SUCCESS",
        firstname: firstname,
      });
    }
  } 
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
