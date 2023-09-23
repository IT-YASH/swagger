const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsdocs = YAML.load('./swagger.yamljs')
const app= express()       
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerJsdocs))



app.get("/test",(req,res)=>{
    res.status(200) 
    res.send("this is hello world")
  });
 
            
app.listen(3000,()=>{
    console.log("server is running");
})