import nevbar from "./components/nevbar.js";
console.log(nevbar());
document.getElementById("import").innerHTML=nevbar();
import footer from "./components/footer.js";
console.log(footer());
document.getElementById("footerPart").innerHTML=footer();




var slideIndex = 1;
var timer;
// var carouselBtn;

function plusDivs(n) {
    // console.log(n);
    // clearInterval(timer);
    showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var btn = document.getElementsByClassName("carousel__indicator");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    btn[i].classList.remove('carousel__indicator--active')

  }
  x[slideIndex-1].style.display = "block";  
  btn[slideIndex-1].classList.add('carousel__indicator--active')
}


window.addEventListener('load', function(){
    showDivs(slideIndex);
    timer = setInterval(function(){
        plusDivs(1)
    }, 4000)
    
})




var slideIndexes = 1;

function plusDivs1(a) {
// console.log(n);
// clearInterval(timer);
showDivs1(slideIndexes += a);
}

function showDivs1(a) {
var j;
var xe = document.getElementsByClassName("slick-slides");
var btn1 = document.getElementsByClassName("slick__indicator");
if (a > xe.length) {slideIndexes = 1}
if (a < 1) {slideIndexes = xe.length}
for (j = 0; j < xe.length; j++) {
xe[j].style.display = "none";
btn1[j].classList.remove('slick__indicator--active')

}
xe[slideIndexes-1].style.display = "block";  
btn1[slideIndexes-1].classList.add('slick__indicator--active')
}


window.addEventListener('load', function(){
showDivs1(slideIndexes);
// timer = setInterval(function(){
// plusDivs(1)
// }, 4000)

})

var pricenavbarcart = document.getElementById('nav_cart_price');

var priceStr = "$0.00"
if(JSON.parse(localStorage.getItem('finalPrice')) !== null){
  var priceStr = "$"+JSON.parse(localStorage.getItem('finalPrice'));
}

pricenavbarcart.innerText = priceStr;


function getData(){
  let Product=document.getElementById("Search").value;
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${Product}`;
    fetch(url)
    .then(function(res){
        return res.json();
    
    })
    .then(function(res){
        console.log(res);
        
        localStorage.setItem("brandsearch",JSON.stringify(res));
        
        //appenddata(res);
    })
    }

getData();
let serch=document.getElementById("Search");

serch.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
getData();
window.location.href="./Search.html"

}

});

