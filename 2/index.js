const GenerateApp = () => {

    const generate = document.querySelector("#generate");
    const size = document.querySelector("#size");
    const color = document.querySelector("#color");
    const manufacturer = document.querySelector("#manufacturer");
    const sell_out = document.querySelector("#sell-out");
    const link = document.querySelector("#link");
    const state = {
        baseLink: 'http://любой_домен/filter?',
        currentSize: '',
        currentColor: [],
        currentManuf: 0,
        currentSell: 0,
    };

    const setSize = () => {
        state.currentSize = event.target.value;
    };

    const setColor = () => {
        let index = state.currentColor.indexOf(event.target.value);
        if (state.currentColor.includes(event.target.value)) {
            state.currentColor.splice(index, 1);
        } else {
            state.currentColor.push(event.target.value);
        };
    };

    const setManufacturer = () => {
        state.currentManuf = event.target.value;
    };


    const setSell = () => {
        if (state.currentSell === 0) {
            state.currentSell = event.target.value;
        } else {
            state.currentSell = 0
        };
    };

    const generator = () => {
        const { baseLink, currentSize, currentColor, currentManuf, currentSell } = state;

        link.innerHTML = `${baseLink}
        size=${currentSize}
        &color=${currentColor}
        &manufacturer=${currentManuf}
        &sell_out=${currentSell}`;
    };

    size.addEventListener('change', setSize);
    color.addEventListener('change', setColor);
    sell_out.addEventListener('change', setSell);
    generate.addEventListener('click', generator);
    manufacturer.addEventListener('change', setManufacturer);

};

document.addEventListener("DOMContentLoaded", GenerateApp);