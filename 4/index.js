
const crossDomainApp = function () {
    const myIframe = document.getElementById('myIframe');
    const change = document.getElementById('change');
    const input = document.getElementById('input');
    const get = document.getElementById('get');


    change.addEventListener('click', e => {

        const row = myIframe.contentDocument.querySelector('#table').insertRow();
        row.insertCell().innerHTML = row.sectionRowIndex;
        row.insertCell().innerHTML = input.value;
        row.insertCell().innerHTML = '<input type="button" value="DELETE" class="del"/>';
        input.value = "";
        localStorage.setItem("item", myIframe.contentDocument.getElementsByTagName('table')[0].innerHTML);
        console.log('Данные добавлены !');
    });

    get.addEventListener('click', e => {

        let url = 'http://127.0.0.1:5500/content.html';
        let XHR = window.XDomainRequest || window.XMLHttpRequest
        let xhr = new XHR();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            document.querySelector('.output').innerHTML = xhr.response.localStorage.getItem('item');
        }
        xhr.onerror = function () {
            alert("Error")
        }
        xhr.send()

    });

    myIframe.contentWindow.addEventListener("load", function () {
        if (localStorage.getItem('item'));
        myIframe.contentDocument.getElementsByTagName('table')[0].innerHTML = localStorage.getItem('item');
    });


};

// const ls = {
//     item: `{
//         value: '',
//         callback: () => {},
//     }`,
// };

// const readStorage = () => {
//     const item = localStorage.getItem();
//     if (item) {
//         console.log(item.value);
//         item.callback();
//     } else {
//         console.log('Read unsuccessful');
//     }
// }

// const writeStorage = (value) => {
//     const item = localStorage.setItem(value);
//     if (item) {
//         console.log(item.value);
//         item.callback();
//     } else {
//         console.log('Write unsuccessful');
//     }
// }

document.addEventListener("DOMContentLoaded", crossDomainApp);