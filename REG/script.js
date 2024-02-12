const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const ageInput = document.getElementById('age_input');
// const professionInput = document.getElementById('profession_input');
const passwordInput = document.getElementById('password_input');
const repeatInput = document.getElementById('repeat_input');
const checkboxInput = document.getElementById('checkbox_input')
const validateButton = document.getElementById("validate");

function submit(){
    let nameValue = nameInput.value;
    if (nameValue.length < 2) { 
        passwordInput.value = "";
        repeatInput.value = "";
        alert("Enter your name please, at least 2 characters");
        return;
    } else {
    
    };
    let emailValue = emailInput.value;
    const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexpEmail.test(emailValue)) {
        console.log('it works :)')
    } else {
        passwordInput.value = "";
        repeatInput.value = "";
        alert("Enter a valid e-mail please");
        return;
    };
    let ageValue = ageInput.value;
    if (ageValue.length === 0) {
        passwordInput.value = "";
        repeatInput.value = "";
        alert("Enter your age please");
    return;
    } else {
        
    };

    // let professionValue = professionInput.value;
    // if (professionValue.length === 0) {
    //     passwordInput.value = "";
    //     repeatInput.value = "";
    //     alert("Enter your profession please");
    //     return;
    // } else {
    // };
    let passwordValue = passwordInput.value;
    let regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regexpPassword.test(passwordValue)) {
        console.log('it works too');
        repeatInput.value = "";
        alert("Enter your password please");
        return;
    } 
    else {   
    };
    
    let repeatValue = repeatInput.value;
    if (repeatValue.length === 0) {
        alert("Repeat your password please");
        return;
    }
    else {
    };

    if(!checkboxInput.checked){
        alert("Please accept the terms and conditions")
        return;
    }

    if (passwordValue === repeatValue){
        alert("Welcome!");
    }
    else {
        alert("Password mismatch");
    };
};

validateButton.addEventListener('click', submit);