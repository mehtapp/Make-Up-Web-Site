const express=require("express");
const app=express();
const path=require("path");
const Port=process.env.PORT||3000; //for heroku
const userRoute=require("./Routes/user");
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname,"public")));

app.listen(Port);
app.use(userRoute);

