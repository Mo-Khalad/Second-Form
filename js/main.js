const formWrapper=document.querySelector('.form-wrapper');
const btnLoginNav=document.getElementById("btn-login-nav");
const iconClose=document.querySelectorAll("#icon-close");
const signUpBtnLink= document.querySelector(".signUpBtn-link");
const signInBtnLink= document.querySelector(".signInBtn-link");
const formSignUpBtn=document.querySelector(".form-sign-up-btn");
const formLoginBtn=document.querySelector(".form-login-btn");
const displayFormSignIn=()=> formWrapper.style.display='block' ;    
const closeFromSignIn=()=> formWrapper.style.display='none';
const toggleSignIn=(element)=>{
    if(element.innerHTML==="Register"){
       formSignUpBtn.style.left='0';   
       formLoginBtn.style.left='-30rem'; 
    } 
    else{
       formLoginBtn.style.left='0';
       formSignUpBtn.style.left='-30rem';
    }
}
btnLoginNav.addEventListener("click" , displayFormSignIn);
signUpBtnLink.addEventListener("click" ,()=>toggleSignIn(signUpBtnLink));
signInBtnLink.addEventListener("click" ,()=>toggleSignIn(signInBtnLink));
iconClose.forEach((element)=>element.addEventListener('click' ,closeFromSignIn))
