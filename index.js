
//-------------------------------------import nevbar--------------------------------------------
import nevbar from "./components/nevbar.js";
console.log(nevbar());
document.getElementById("mainNevbar").innerHTML=nevbar();
//---------------------------------------Best of Skin Store hidden div--------------------------
let BestofSkinStore=document.getElementById("BoSS");
let boss=document.getElementById('topbar');
BestofSkinStore.addEventListener("mouseover",show_sidebar1);
boss.addEventListener("mouseover",hide_sidebar1);
document.getElementById('BoSS-h').style.visibility="hidden";
    function show_sidebar1()
    {
    document.getElementById('BoSS-h').style.visibility="visible";
    }
    
    function hide_sidebar1()
    {
    document.getElementById('BoSS-h').style.visibility="hidden";
    }
   //--------------------------------------Summer Shop hidden div------------------------------------
   let SummerShop=document.getElementById("SShop");
   let sshop=document.getElementById('topbar')
   SummerShop.addEventListener("mouseover",show_sidebar2);
 sshop.addEventListener("mouseover",hide_sidebar2);
   document.getElementById('SummerShop').style.visibility="hidden";
       function show_sidebar2()
       {
       document.getElementById('SummerShop').style.visibility="visible";
       }
       
       function hide_sidebar2()
       {
       document.getElementById('SummerShop').style.visibility="hidden";
       }
 //-----------------------------------------Sale--------------------------------------------------
 let Sale=document.getElementById("Sale");
 let sale=document.getElementById("topbar")

 Sale.addEventListener("mouseover",show_sidebar3);
sale.addEventListener("mouseover",hide_sidebar3);
 document.getElementById('sale').style.visibility="hidden";
     function show_sidebar3()
     {
     document.getElementById('sale').style.visibility="visible";
     Sale.style.backgroundColor="black"
     }
     
     function hide_sidebar3()
     {
     document.getElementById('sale').style.visibility="hidden";
     Sale.style.backgroundColor="white"
     }    
   //-----------------------------------BuildaRoutine--------------------------------------------------  
   let BuildaRoutine=document.getElementById("BAR");
 let bar=document.getElementById("topbar")

 BuildaRoutine.addEventListener("mouseover",show_sidebar4);
bar.addEventListener("mouseover",hide_sidebar4);
 document.getElementById('BuildaRoutine').style.visibility="hidden";
     function show_sidebar4()
     {
     document.getElementById('BuildaRoutine').style.visibility="visible";
     BuildaRoutine.style.backgroundColor="black"
     }
     
     function hide_sidebar4()
     {
     document.getElementById('BuildaRoutine').style.visibility="hidden";
     BuildaRoutine.style.backgroundColor="white"
     } 
   //--------------------------------------SkinCare--------------------------------------
   let SkinCare=document.getElementById("SC");
   let sc=document.getElementById("topbar")
  
   SkinCare.addEventListener("mouseover",show_sidebar5);
  sc.addEventListener("mouseover",hide_sidebar5);
   document.getElementById('SkinCare').style.visibility="hidden";
       function show_sidebar5()
       {
       document.getElementById('SkinCare').style.visibility="visible";
       SkinCare.style.backgroundColor="black"
       }
       
       function hide_sidebar5()
       {
       document.getElementById('SkinCare').style.visibility="hidden";
       SkinCare.style.backgroundColor="white"
       }
       //------------------------------------------Hair----------------------------------------------
       let hair=document.getElementById("HR");
       let hr=document.getElementById("topbar")
      
       hair.addEventListener("mouseover",show_sidebar6);
      hr.addEventListener("mouseover",hide_sidebar6);
       document.getElementById('Hair').style.visibility="hidden";
           function show_sidebar6()
           {
           document.getElementById('Hair').style.visibility="visible";
          hair.style.backgroundColor="black"
           }
           
           function hide_sidebar6()
           {
           document.getElementById('Hair').style.visibility="hidden";
           hair.style.backgroundColor="white"
           }
//------------------------------------Makeup-----------------------------------------------
let makeup=document.getElementById("MK");
       let mk=document.getElementById("topbar")
      
       makeup.addEventListener("mouseover",show_sidebar7);
      mk.addEventListener("mouseover",hide_sidebar7);
       document.getElementById('Makeup').style.visibility="hidden";
           function show_sidebar7()
           {
           document.getElementById('Makeup').style.visibility="visible";
          makeup.style.backgroundColor="black"
           }
           
           function hide_sidebar7()
           {
           document.getElementById('Makeup').style.visibility="hidden";
           makeup.style.backgroundColor="white"
           }  
  //------------------------------------------------Tools--------------------------------------     
  let tools=document.getElementById("TS");
       let tl=document.getElementById("topbar")
      
       tools.addEventListener("mouseover",show_sidebar8);
      tl.addEventListener("mouseover",hide_sidebar8);
       document.getElementById('Tools').style.visibility="hidden";
           function show_sidebar8()
           {
           document.getElementById('Tools').style.visibility="visible";
          tools.style.backgroundColor="black"
           }
           
           function hide_sidebar8()
           {
           document.getElementById('Tools').style.visibility="hidden";
           tools.style.backgroundColor="white"
           }              