function inputController() {

    const input = document.querySelector('#name_input');

    const setColor = () => {
        if (input.value != 'Xxxx') {
            input.classList.add("red");
        }
        else {
            input.classList.remove("red");
        };
    };

    input.addEventListener('input', setColor);
};

document.addEventListener("DOMContentLoaded", inputController);