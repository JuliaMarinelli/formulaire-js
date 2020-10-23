const submit = document.getElementById("submitButton")
const password = document.getElementById("password")
const name = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById('formId')

const passwordError = document.getElementById("passwordError")
const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")

let passwordIsFill;
let nameIsFill;
let emailIsFill;

window.onload = function(){
    passwordUpdate();
    nameUpdate();
    emailUpdate();
    submitUpdate();
    removeErrors();
}

password.addEventListener('keyup', (e)=>{
    passwordUpdate();
    submitUpdate();
})
name.addEventListener('keyup', (e)=>{
    nameUpdate();
    submitUpdate();
})
email.addEventListener('keyup', (e)=>{
    emailUpdate();
    submitUpdate();
})

passwordUpdate = function(){
    passwordIsFill = password.value.toString().length !== 0
    
    if(passwordIsFill) {
        password.classList.add('valid')
        password.classList.remove('invalid')
    }
    else { 
        password.classList.add('invalid')
        password.classList.remove('valid')
    }
}

nameUpdate = function(){
    nameIsFill = name.value.toString().length !== 0
    if(nameIsFill) {
        name.classList.add('valid')
        name.classList.remove('invalid')
    }
    else { 
        name.classList.add('invalid')
        name.classList.remove('valid')
    }
}

emailUpdate = function(){
    emailIsFill = email.value.toString().length !== 0
    
    if(emailIsFill) {
        email.classList.add('valid')
        email.classList.remove('invalid')
    }
    else { 
        email.classList.add('invalid')
        email.classList.remove('valid')
    }
}

submitUpdate = function() {
    submit.disabled = !passwordIsFill || !nameIsFill || !emailIsFill;
}

removeErrors = function() {
    passwordError.classList.add('hide');
    emailError.classList.add('hide');
    nameError.classList.add('hide');
}

form.addEventListener("submit", function (e) {
    if(!passwordIsFill || !nameIsFill || !emailIsFill) {
        alert("NOOOOON !")
        e.preventDefault()
        if(!passwordIsFill)
            passwordError.classList.remove('hide')
        if(!nameIsFill)
            nameError.classList.remove('hide')
        if(!emailIsFill)
            emailError.classList.remove('hide')
    }
})