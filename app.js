const express = require('express')
const swaggerUI = require('swagger-ui-express')
const json = require('json')
const swaggerJsdocs = json.load('./swagger.json')
const app= express() 
const port = 3000
app.use(express.json())      
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerJsdocs))



let users = [
  {name: "yash patel"},
  {name: "yash tiwari"}
];


app.get("/test",(req,res)=>{
  let id = req.body.name;
  if(req.body){
    if(!firstName){
    res.status(400).json({
    status:"FAIL",
    toast:"Missing parameter"})
    }
    else if(firstName){
    res.status(200).json({
    status:"SUCCESS",
    firstName:firstName})
    }
  }});
 
            
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})