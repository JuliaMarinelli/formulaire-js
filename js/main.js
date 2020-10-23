const submit = document.getElementById("submitButton")
const password = document.getElementById("password")
const name = document.getElementById("name")
const email = document.getElementById("email")

let passwordIsFill;
let nameIsFill;
let emailIsFill;

window.onload = function(){
    passwordIsFill = password.value.toString().length !== 0
    nameIsFill = name.value.toString().length !== 0
    emailIsFill = email.value.toString().length !== 0
    submitUpdate();
}

password.addEventListener('keyup', (e)=>{
    passwordIsFill = e.target.value.toString().length !== 0
    submitUpdate();
})
name.addEventListener('keyup', (e)=>{
    nameIsFill = e.target.value.toString().length !== 0
    submitUpdate();
})
email.addEventListener('keyup', (e)=>{
    emailIsFill = e.target.value.toString().length !== 0
    submitUpdate();
})

submitUpdate = function() {
    submit.disabled = !passwordIsFill || !nameIsFill || !emailIsFill
}