const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsdocs = YAML.load('./swagger.yaml')
const app= express()    
const port = 3000;   
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerJsdocs))



app.get("/instagram",(req,res)=>{
    res.status(200) 
  });

app.get("/facebook",(req,res)=>{
    res.status(200) 
  });
 
            
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})