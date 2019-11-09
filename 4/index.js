
const crossDomainApp = function () {
    const myIframe = document.getElementById('myIframe');
    const change = document.getElementById('change');
    const input = document.getElementById('input');

    change.addEventListener('click', e => {

        // const iframeWindow = myIframe.contentWindow;
        const iframeDocument = myIframe.contentDocument;
        const iframeHeading = iframeDocument.querySelector('p');
        const iframeData = iframeDocument.getElementById('data');

        iframeData.innerHTML = input.value;
        iframeHeading.textContent = 'Данные изменены!!';

        if (input.value != '') {
            console.log('Данные изменены!!');
        } else {
            console.log('Данные удалены!!');
            iframeHeading.textContent = '';
        }
    });
};

document.addEventListener("DOMContentLoaded", crossDomainApp);