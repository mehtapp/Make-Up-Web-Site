const express=require("express");
const app=express();
const path=require("path");
const userRoute=require("./Routes/user");
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname,"public")));

app.listen(8000);
app.use(userRoute);

