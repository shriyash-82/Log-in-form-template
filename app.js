const btn=document.querySelector(".fa");
const password=document.getElementById("password_id");
const form=document.querySelector(".form");
form.addEventListener("submit",(e)=>{
         e.preventDefault();
 })
 btn.addEventListener("click",(e)=>{
    console.log(e)
    if(password.type==="password")
    {
        password.type="text";
        e.target.classList="fa fa-eye"
    }
    else{
        password.type="password"
        e.target.classList="fa fa-eye-slash"
    }
 })


