const GenerateApp = function () {

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


    color.addEventListener('change', event => {
        let index = state.currentColor.indexOf(event.target.value);
        if (state.currentColor.includes(event.target.value)) {
            state.currentColor.splice(index, 1);
        } else {
            state.currentColor.push(event.target.value);
        }

    });


    size.addEventListener('change', event => {
        state.currentSize = event.target.value;
    });


    manufacturer.addEventListener('change', event => {
        state.currentManuf = event.target.value;
    });


    sell_out.addEventListener('change', event => {
        if (state.currentSell === 0) {
            state.currentSell = event.target.value;
        } else {
            state.currentSell = 0
        }
    });

    generate.addEventListener('click', event => {
        const { baseLink, currentSize, currentColor, currentManuf, currentSell } = state;

        link.innerHTML = `${baseLink}size=${currentSize}&color=${currentColor}&manufacturer=${currentManuf}&sell_out=${currentSell}`;
        console.log(`${baseLink}size=${currentSize}&color=${currentColor}&manufacturer=${currentManuf}&sell_out=${currentSell}`);
    });

};

document.addEventListener("DOMContentLoaded", GenerateApp);