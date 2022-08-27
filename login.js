 let userdata= JSON.parse(localStorage.getItem("user"))||[]

    console.log(userdata)

    class userlogin{
        constructor(){

        }

        login(email1){
            // console.log(email1,"l")
           
           let ans= userdata.filter((el)=>{
               return el.email===email1
            })
            console.log(ans)
            if(ans.length>0){
            alert("Login succesfull")
            window.location.href="index.html"
            }
            else{
                alert("This email does not registered with us kindly visit to sign-up page")
                window.location.href="signup.html"

            }
        }
    }

    document.querySelector("#btn1").addEventListener("click",(e)=>{
        e.preventDefault()
       
        let email1 = document.querySelector("#email").value
        console.log(email1,"login")
        let password = document.querySelector("#password").value
        let s2=new userlogin ()
         s2.login(email1)
        
        
    })