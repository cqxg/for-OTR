const GenerateApp = function () {

    const generate = document.querySelector("#generate");
    const size = document.querySelector("#size");
    const color = document.querySelector("#color");
    const manufacturer = document.querySelector("#manufacturer");
    const sell_out = document.querySelector("#sell-out");
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
            console.log(state.currentColor);
        } else {
            state.currentColor.push(event.target.value);
            console.log(state.currentColor);
        }

    });



    size.addEventListener('change', event => {
        state.currentSize = event.target.value;
        console.log(state.currentSize);
    });

    manufacturer.addEventListener('change', event => {
        state.currentManuf = event.target.value;
        console.log(state.currentManuf);
    });

    sell_out.addEventListener('change', event => {
        if (state.currentSell === 0) {
            state.currentSell = event.target.value;
        } else {
            state.currentSell = 0
        }
        console.log(state.currentSell);
    });

}

document.addEventListener("DOMContentLoaded", GenerateApp);


