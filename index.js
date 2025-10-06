
// import navbar from"../js/navbar.js";
// import {getData,display} from "../js/fetch.js";
// let nav =document.getElementById("navbar")
// let api = "https://fakestoreapi.com/products";

// let main = document.getElementById("main")

// let x = navbar()
// nav.innerHTML = x

// let data =  await getData(api)


// display(data)


import navbar from "../js/navbar.js";

let nav = document.getElementById("navbar");
let main = document.getElementById("main");
import  {getData,display} from "../js/fetch.js"

let api = "https://fakestoreapi.com/products"
 
let  x= navbar();
let data =  await getData(api)

display(data)


nav.innerHTML = x





