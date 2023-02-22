function init() {
    document.myform.addEventListener("submit", submitForm, false);
}

function submitForm(event) {
    event.preventDefault();
    alert("Function Coming Soon");
}
window.addEventListener("load", init, false);