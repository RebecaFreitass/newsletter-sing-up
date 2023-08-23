
const inputEmail = document.getElementById("email-input");
const span = document.getElementById("error-span")
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const mainLogin = document.querySelector(".main-login")
const successPage = document.querySelector(".success-page")
function setError() {
    inputEmail.style.border ='2px solid #ff0000'
    span.style.display= "block"

}
function removeError() {
    inputEmail.style.border =''
    span.style.display= "none"
}

function emailValidate(){
    if(!emailRegex.test(inputEmail.value)){
        setError()
       console.log("naopresta")
    }else{
       removeError()
       console.log("presta")
    }
}

const submitButton = document.getElementById("submit-button")
function showtheSuccessPage(){
    mainLogin.style.display = "none"
    successPage.style.display = "block"
}