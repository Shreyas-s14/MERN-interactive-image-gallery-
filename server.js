//not needed most likely
const express = require('express');
const app = express();

app.get("/",function(req,res)
{
    res.send("Express Here")
})
app.listen(3001,function()
{
    console.log("Running on port 3001");
}) 