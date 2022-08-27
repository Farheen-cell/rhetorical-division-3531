import nevbar from "./components/nevbar.js";
console.log(nevbar());
document.getElementById("import").innerHTML=nevbar();
import footer from "./components/footer.js";
console.log(footer());
document.getElementById("footerPart").innerHTML=footer();
let cart = JSON.parse(localStorage.getItem("cartData")) || [];

let data=JSON.parse(localStorage.getItem("brandsearch"));
//console.log(data)


let SearchAppend=(data)=>{
  let contaner=document.getElementById("container");
    contaner.innerHTML=null;
    console.log(data)
data.forEach((el)=>{
  let box=document.createElement("div");
  let img=document.createElement("img");
  img.src=el.image_link;
  let name=document.createElement("h4");
  name.innerText=el.name;
  let price=document.createElement("h3");
  price.innerText=`Price:-${el.price}`;
  let AddTooCart=document.createElement("button");
  AddTooCart.innerText="ADD TO CART";
  AddTooCart.addEventListener("click",function(el){
cart.push(el);
localStorage.setItem("cartData",JSON.stringify(cart))
  });
  box.append(img,name,price,AddTooCart);
  contaner.append(box);
})
}
SearchAppend(data);