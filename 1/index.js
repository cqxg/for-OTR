function inputController() {

    const input = document.querySelector('#name_input');

    input.addEventListener('input', function () {
        if (input.value != 'Xxxx') {
            input.classList.add("red");
        }
        else {
            input.classList.remove("red");
        }
    });
}

document.addEventListener("DOMContentLoaded", inputController);