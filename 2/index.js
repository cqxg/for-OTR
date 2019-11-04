const GenerateApp = function () {

    const generate = document.querySelector("#generate");
    const size = document.querySelector("#size");
    const color = document.querySelector("#color");
    const manufacturer = document.querySelector("#manufacturer");
    const sell_out = document.querySelector("#sell-out");
    const state = {
        baseLink: 'http://любой_домен/filter?',
        currentSize: '',
        currentColor: '',
        currentManuf: '',
        currentSell: ''
    };

    size.addEventListener('click', event => {
        state.currentSize = event.target.value;
        console.log(state.currentSize);
    });


    // color.addEventListener('click', setColor());
    // manufacturer.addEventListener('click', setmanufacturer());
    // sell_out.addEventListener('click', setSell());
}

document.addEventListener("DOMContentLoaded", GenerateApp);


// function inputController() {

//     const state = {
//         baseLink: 'http://любой_домен/filter?',
//         size: '',
//         color: '',
//         manufacturer: '',
//         sell_out: ''
//     };

//     load() {
//         const { size , color , manufacturer , sell_out } = state;
//         http://любой_домен/filter?size=M&color=1,2&manufacturer=aaa,eee
//         fetch(`${baseLink}size=${size}&color=${color}&manufacturer=${manufacturer}&sell_out=${sell_out}`)
//             .then(res => res.json())
//             .then(response => {
//                 this.state.pageToken = response.nextPageToken;
//                 this.generateStatics(response.items);
//                 this.secondQuery();
//             })
//             .catch(err => console.log(err));
//     }    
// }

// document.addEventListener("DOMContentLoaded", inputController);