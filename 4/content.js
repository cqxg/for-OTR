const crossDomainApp = function () {

    const myIframe = document.getElementById('myIframe');
    const change = document.getElementById('change');
    const input = document.getElementById('input');
    const p = document.querySelector('p');
    const data = document.getElementById('data');

    change.addEventListener('click', e => {
        data.innerHTML = input.value;
        p.textContent = 'Данные изменены!!';

        if (input.value != '') {
            console.log('Данные изменены!!');
        } else {
            console.log('Данные удалены!!');
            p.textContent = '';
        }
    });

}
document.addEventListener("DOMContentLoaded", crossDomainApp);