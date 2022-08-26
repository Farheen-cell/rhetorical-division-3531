
let userdata= JSON.parse(localStorage.getItem("user")) || []
class user{
   
    constructor(){
      
    }

    signup(email,password,name){
        //validation of username & password as per rules
        
        let isvalidated=false
        // validating of username & password methods

        isvalidated=this.validateemail(email) && this.validatepassword(password)
         
        if(isvalidated==true){
            this.email=email
            this.password=password
            this.name = name

            alert("user registered succesfully")
            userdata.push(this)
            localStorage.setItem("user",JSON.stringify(userdata))
            window.location.href="login.html"
            console.log(userdata)
           
        }
        else{
            alert("this email already registered kindly login")
            window.location.href="login.html"
            
        }

    }
    validateemail(email){
        
       let ans = userdata.filter((el)=>{
             return el.email===email
       })
       if(ans.length>0){
        return false
       }
       else{
        return true
       }
    }
    validatepassword(password){
        if(password.length>0){
            return true
        }
        else{
            return false
        }
       
    }


    
}


document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.querySelector("#sname").value
    let email = document.querySelector("#semail").value
    let password = document.querySelector("#spassword").value
    let s1=new user ()
     s1.signup(email,password,name)
    
    
})

    
    