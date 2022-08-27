import nevbar from "./components/nevbar.js";
console.log(nevbar());
document.getElementById("import").innerHTML=nevbar();
import footer from "./components/footer.js";
console.log(footer());
document.getElementById("footerPart").innerHTML=footer();
let cart = JSON.parse(localStorage.getItem("cartthings")) || [];

let data=JSON.parse(localStorage.getItem("brandsearch"));
//console.log(data)


let SearchAppend=(data)=>{
  let contaner=document.getElementById("container");
    contaner.innerHTML=null;
    //console.log(data)
data.forEach((el)=>{
  //console.log(el)
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
  console.log(el);
cartLS(el);
  });
  box.append(img,name,price,AddTooCart);
  contaner.append(box);
})
}
SearchAppend(data);
function cartLS(el){
  cart.push(el);
localStorage.setItem("cartthings",JSON.stringify(data))
}

let Name=document.getElementById("BrandName");
Name.innerText=data[0].brand;
let number=document.getElementById("TotalResult");
number.innerText=`${data.length} Results`;
let dis=document.getElementById("discription");
dis.innerText=data[10].description;

let pageName=document.getElementById("pageName");
pageName.innerText=data[0].brand;


document.querySelector("#one1").addEventListener("change", function(){
  filterit(document.querySelector("#one1").value,data)
})
/* filtred run program */
function filterit(getvalue,data){
  if(getvalue=="Alpha"){
      filterbyAZ(data)
  }else if(getvalue=="rev Alpha"){
      filterbyZA(data)
  }else if(getvalue=="LH"){
      filterbyLH(data)
  }else if(getvalue=="HL"){
      filterbyHL(data)
  }
}
/* Sorting Functions */
/* Alphabatic */
function filterbyAZ(data){
  let filter =data.sort(function(a,b){
      if(a.name>b.name) return 1
      if(a.name<b.name) return -1
      return 0
  })
  SearchAppend(filter)
  console.log(filter)
}
function filterbyZA(data){
  let filter =data.sort(function(a,b){
      if(a.name>b.name) return -1
      if(a.name<b.name) return 1
      return 0
  })
  SearchAppend(filter)
  console.log(filter)
}
/* Price based */
function filterbyLH(data){
  let filter =data.sort(function(a,b){
      return a.price - b.price
  })
  SearchAppend(filter)
  console.log(filter)
}
function filterbyHL(data){
  let filter =data.sort(function(a,b){
      return b.price - a.price
  })
  SearchAppend(filter)
  console.log(filter)
}

