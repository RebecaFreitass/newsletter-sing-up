
const inputEmail = document.getElementById("email-input");
const span = document.getElementById("error-span")
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
console.log(inputEmail, "ola")
function setError() {
    inputEmail.style.border ='2px solid #ff0000'
    span.style.border = "block"

}
function removeError() {
    inputEmail.style.border =''
    span.style.border = "none"
}

function emailValidate(){
    if(emailRegex.test(inputEmail.value)){
        setError()
        console.log(validado)
    }else{
        removeError()
    }
}