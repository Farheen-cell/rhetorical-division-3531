import nevbar from "./components/nevbar.js";
console.log(nevbar());
document.getElementById("import").innerHTML=nevbar();
import footer from "./components/footer.js";
console.log(footer());
document.getElementById("footerPart").innerHTML=footer();


var cartThings = JSON.parse(localStorage.getItem("cartthings")) || [];
var quickbyget = JSON.parse(localStorage.getItem("quickbuy1")) || [];

reLoadM(quickbyget);

function reLoadM(quickbyget){

    creatcart(quickbyget);
    
     function creatcart(quickbyget) {
        document.querySelector("#container").textContent ="";
            quickbyget.map(function (data, index) {
    
            var div = document.createElement("div")
            document.querySelector("#container").append(div)
    
            // inside div creating image and  image_url
            var image = document.createElement("img");
            image.setAttribute("src", data.image_url);
            div.append(image);
    
            var btn1 = document.createElement("button")
            btn1.setAttribute("id", "btnwish")
            btn1.textContent = "Wish"
            btn1.style.display = "block"
            div.append(btn1)
    
            var name = document.createElement("p");
            name.style.height = "35px"
            name.textContent = data.name;
            name.style.marginTop = "3%"
            div.append(name);
    
            var box = document.createElement("div")
            box.textContent = data.box
            box.setAttribute("id", "boxer")
            div.append(box)
    
    
    
            var p1 = document.createElement("p");
            check0(data.MSRP);
    
            function check0(val){
           if(val!=undefined){
                p1.innerHTML = `MSRP: <s>$${data.MSRP}</s>`;
           }
            }
    
            // p1.innerHTML = `MSRP: <s>$${data.MSRP}</s>`;
            p1.style.marginTop = "5%"
            p1.style.color = "gray"
    
    
            var p2 = document.createElement("p")
            p2.textContent = `$${data.price}`;
            p2.style.marginTop = "1%"
            p2.style.fontSize = "24px"
            p2.style.fontWeight = "bold"
            div.append(p1, p2)
    
    
            var btn2 = document.createElement("button")
            btn2.setAttribute("id", "btnbuy");
            btn2.textContent = "Delete Item"
            div.append(btn2);
    
    
            btn2.addEventListener("click", function () {
                deletItems(index)
    
            });
        });
    }

    
    function deletItems(index) {
        quickbyget.splice(index, 1)
        localStorage.setItem("quickbuy1", JSON.stringify(quickbyget));
        alert("Item Deleted");
        reLoadM(quickbyget);
    }
    
    var cartLength =JSON.parse(localStorage.getItem("cartthings"))
    document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
    document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;
}

function Tsort(){
    var valT=document.querySelector("#sortT").value
    console.log(valT)
    if(valT==""){
        reLoadM(quickbyget);
    }else if(valT=="high"){
        quickbyget.sort(function(a,b){
         return (Number(b.price)-Number(a.price))
     })
     reLoadM(quickbyget);
    }else{
        quickbyget.sort(function(a,b){
            return (Number(a.price)-Number(b.price))
     })
     reLoadM(quickbyget);
    }
 }  

























