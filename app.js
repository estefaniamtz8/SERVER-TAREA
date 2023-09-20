const express = require("express");

const app = express ();

app.get("/",(req, res)=>{
    res.send("Hi");
});

app.listen (7000, () =>{
    console.log("server running on port",7000);
}); 