const express = require('express');
const path = require('path');
const app = express();
const port = 8000
const static_path = (path.join(__dirname,"../public"));
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.send("welcome sk")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/weather",(req,res)=>{
    res.send("weather info")
})
app.get("*",(req,res)=>{
    res.send("404 error page opps")
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})