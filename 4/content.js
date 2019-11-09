
const crossDomainApp = function () {

    change.addEventListener('click', function (e) {
        let row = table.insertRow();
        row.insertCell().innerHTML = row.sectionRowIndex;
        row.insertCell().innerHTML = input.value;
        row.insertCell().innerHTML = '<input type="button" value="DELETE" class="del"/>';
        input.value = "";
        localStorage.setItem("item", document.getElementsByTagName('table')[0].innerHTML);
        console.log('Данные добавлены !');
    });

    table.addEventListener('click', function (e) {
        if (e.target.classList.contains('del')) {
            e.target.parentNode.parentNode.remove();
            localStorage.setItem("item", document.getElementsByTagName('table')[0].innerHTML);
            console.log('Данные удалены !');
        };
    });

    window.addEventListener("load", function () {
        if (localStorage.getItem('item'));
        document.getElementsByTagName('table')[0].innerHTML = localStorage.getItem('item')
    });

};

document.addEventListener("DOMContentLoaded", crossDomainApp);