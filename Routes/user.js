const express=require("express");
const route=express.Router();
const path=require("path");
const request=require("request");
var products=[];

function call (){

}
route.get("/", (req,res)=>{
    
  
    if(products.length==0 || products.length<0)
    {
        request("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", (err, response, body)=>{
        products=JSON.parse(body).reverse();                                
        res.render("index", {baslik:"Anasayfa" , A_products:products});
        
        });
    }
    else
    {
        res.render("index", {baslik:"Anasayfa", A_products:products});
    }
    
}) ;



route.get("/products", (req, res)=>{
    if(products.length==0 || products.length<0)
    {
        request("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", (err, response, body)=>{
        products=JSON.parse(body).reverse();                                
        res.render("products" , {baslik:"Ürünler", A_products:products});
        });
    }
    else
    {
        res.render("products" , {baslik:"Ürünler", A_products:products});
    }
    
    
});










module.exports=route;