
const crossDomainApp = function () {
    const myIframe = document.getElementById('myIframe');
    const change = document.getElementById('change');
    const input = document.getElementById('input');

    change.addEventListener('click', e => {

        let row = myIframe.contentDocument.querySelector('#table').insertRow();
        row.insertCell().innerHTML = row.sectionRowIndex;
        row.insertCell().innerHTML = input.value;
        row.insertCell().innerHTML = '<input type="button" value="DELETE" class="del"/>';
        input.value = "";
        localStorage.setItem("item", myIframe.contentDocument.getElementsByTagName('table')[0].innerHTML);
        console.log('Данные добавлены !');
    });

    myIframe.contentWindow.addEventListener("load", function () {
        if (localStorage.getItem('item'));
        myIframe.contentDocument.getElementsByTagName('table')[0].innerHTML = localStorage.getItem('item')
    });


};

document.addEventListener("DOMContentLoaded", crossDomainApp);