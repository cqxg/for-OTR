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