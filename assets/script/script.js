


















































































































// Lena
function subscribeCheckValidity(e) {
    e.preventDefault();
    const emailCheck = document.getElementById("e-mail");
    const expression =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const message = document.querySelector(".message");

    if (!validate(expression, emailCheck.value)) {
        notValid(submit, message, "Your email is invalid.");
    } else {
        valid(submit, message, "You have successfully subscribed.");
    }

    function validate(regex, submit) {
        return regex.test(submit);
    }
    function notValid(submit, el, mess) {
        submit.classList.add("is-invalid");
        el.innerHTML = mess;
    }
    function valid(submit, el, mess) {
        submit.classList.remove("is-invalid");
        submit.classList.add("is-valid");
        el.innerHTML = mess;
    }
}
submit.addEventListener("click", subscribeCheckValidity);
// Lena