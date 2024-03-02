// Cart
let iconCart = document.querySelector("#cart-icon");
let body = document.querySelector("body");
let closecart = document.querySelector("#close-cart");
let itemE1 = document.querySelector(".items");
let cartcontent = document.querySelector(".cart-content");
//open cart
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
//close cart
closecart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
