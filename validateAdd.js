
window.onload = function() {

    const form = document.querySelector('form[name="myform"]');
    const inputs = form.querySelectorAll('input[type="text"]');
    const radios = form.querySelectorAll('input[type="radio"]');
    const submit = form.querySelector('input[type="submit"]');

    form.addEventListener('submit', (e) => {
     e.preventDefault();

    let isValid = true;

    inputs.forEach((input) => {
        if (!input.value) {
        isValid = false;
        input.classList.add('error');
        } else {
        input.classList.remove('error');
        }
    });

    let isRadioChecked = false;
    radios.forEach((radio) => {
        if (radio.checked) {
        isRadioChecked = true;
        }
    });

    if (!isRadioChecked) {
        isValid = false;
    }

    if (isValid) {
        form.submit();
    }
    });}