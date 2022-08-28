import nevbar from "./components/nevbar.js";
console.log(nevbar());
document.getElementById("import").innerHTML=nevbar();
import footer from "./components/footer.js";
console.log(footer());
document.getElementById("footerPart").innerHTML=footer();


let cartItems = []
var cartTotal = 0
window.addEventListener('load', function(){
     cartItems = JSON.parse(localStorage.getItem('cartthings')) || []
        renderCart();
        console.log(cartTotal);
})

function increment(id){
    console.log("inc",id, cartItems)
    const index = cartItems.findIndex(element => element.id === id);
    if(index > -1){
    cartItems[index].quantity++;
    setlocal();
    renderCart()
    console.log("inc",index)
    }
}

function setlocal(){
    localStorage.setItem('cartthings', JSON.stringify(cartItems));
}


function decrement(id){
    console.log("dec",id, cartItems)
    const index = cartItems.findIndex(element => element.id === id);
    if(index > -1 && cartItems[index].quantity > 0){
    cartItems[index].quantity--;
    setlocal();
    renderCart()
    console.log("dec",index)
    }
}

function deleteCartItem(id){
    const index = cartItems.findIndex(element => element.id === id);
    if(index > -1){
        cartItems = cartItems.filter(item => item.id !== id)
        setlocal();
        renderCart();
    }
}




function renderCart(){

    document.getElementById('cart__section__x').innerHTML = ""


            var headdivMain = document.createElement('div');

            var headdiv1 = document.createElement('div');
            headdiv1.style.fontWeight = "600"
            headdiv1.style.color = "#2E3337"
            headdiv1.innerText = 'Items'

            var headdiv2 = document.createElement('div');
            headdiv2.style.fontWeight = "600"
            headdiv2.style.color = "#2E3337"
            headdiv2.innerText = 'Price'

            var headdiv3 = document.createElement('div');
            headdiv3.style.fontWeight = "600"
            headdiv3.style.color = "#2E3337"
            headdiv3.innerText = 'Quantity'


            var headdiv4 = document.createElement('div');
            headdiv4.style.fontWeight = "600"
            headdiv4.style.color = "#2E3337"
            headdiv4.innerText = 'Subtotal'


            var headdiv5 = document.createElement('div');
            
            headdivMain.append(headdiv1, headdiv2, headdiv3, headdiv4, headdiv5)

            document.getElementById('cart__section__x').append(headdivMain);



    cartTotal = 0;
    cartItems.forEach(item => {

            var divMain = document.createElement('div');
            divMain.classList.add('cartCard__items__row')

            var div1 = document.createElement('div');
            div1.classList.add('card__item')

            var img1 = document.createElement('img');
            img1.setAttribute('src', item.image_url)
            var span1 = document.createElement('span');

            span1.style.fontSize = "14px"
            span1.innerHTML = item.name;

            div1.append(img1, span1);

            var div2 = document.createElement('div');
            div2.classList.add('card__price');
            div2.style.fontSize = "14px"
            div2.innerText = "$"+item.price

            var div3 = document.createElement('div');
            div3.classList.add('card__quant');

            
            var btninc = document.createElement('button');
            btninc.classList.add('incDec_btn')
            btninc.innerText = "-"
            btninc.onclick = () => decrement(item.id)

            var span2 = document.createElement('span');
            span2.innerText = item.quantity;
            span2.style.padding = "0 10px"
           

            var btndec = document.createElement('button');
            btndec.classList.add('incDec_btn')
            btndec.innerText = "+"
            btndec.onclick = () => increment(item.id)
            

            div3.append(btninc, span2, btndec);

            // console.log(parseFloat(item.price));
            var div4 = document.createElement('div');
            div4.classList.add('card__sub')
            div4.style.fontSize = "14px"
            div4.style.fontWeight = "700"
            div4.innerText = "$"+ (item.quantity *item.price).toFixed(2);



            var div5 = document.createElement('div');
            div5.classList.add('card__del')

            var btndelete = document.createElement('button');
            btndelete.classList.add('del__x__btn')
            btndelete.innerText = 'X'
            btndelete.onclick = () => deleteCartItem(item.id);
            div5.append(btndelete);

            divMain.append(div1, div2, div3, div4, div5)
            
            document.getElementById('cart__section__x').append(divMain)

            cartTotal += (item.price*item.quantity)
            
            // cartTotal.toFixed(2)
        })
        var totalRow = document.createElement('div');
    //    totalRow.style.padding = "10px"
       totalRow.style.borderBottom = "1px solid #EBEBEB"
       totalRow.style.borderTop = "1px solid #EBEBEB"

       var totalbox = document.createElement('div');
       totalbox.style.padding = "10px 100px"
        totalbox.style.textAlign = "right"
        totalbox.innerText = "Cart Subtotal:"

        var spanTotal = document.createElement('span');
        spanTotal.style.textAlign = 'right'
        spanTotal.style.marginLeft = '100px'
        spanTotal.style.marginRight = '20px'
        spanTotal.style.fontWeight = "600"
        spanTotal.style.color = "#2E3337"
        spanTotal.setAttribute("id", "carttotal");

        totalbox.append(spanTotal)

        totalRow.append(totalbox)

        document.getElementById('cart__section__x').append(totalRow);
        applyCoupon();
        renderCartTotal();
        
}


function renderCartTotal(){

        document.getElementById('carttotal').innerText = "$"+cartTotal.toFixed(2);
        localStorage.setItem('finalPrice', cartTotal.toFixed(2))
}

function applyCoupon(){
    var validcoupons = {
        "masai30" : 30,
         "disc20" : 20,
         "hdfc25" : 25
    }
    var coupon = document.getElementById('couponcode').value;
    coupon = coupon.trim()

    if(validcoupons.hasOwnProperty(coupon)){
        cartTotal -= cartTotal * validcoupons[coupon]/100
        renderCartTotal();
    }
    
}

function locationPayment(){
  window.location.href = "./payment.html"
}

function locationProductPage(){
  window.location.href = "./index.html"
}



// console.log(cartTotal);