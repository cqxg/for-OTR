
const crossDomainApp = () => {
    const myIframe = document.getElementById('myIframe');
    const change = document.getElementById('change');
    const remove = document.getElementById('remove');
    const get = document.getElementById('get');
    const callback = document.getElementById('callback');
    const input = document.getElementById('input');

    const goWrite = () => {
        const payloadWrite = {
            method: 'setData',
            value: input.value,
        }
        myIframe.contentWindow.postMessage(payloadWrite, '*');
    }
    const goRemove = () => {
        const payloadDelete = {
            method: 'removeData',
            value: input.value,
        }
        myIframe.contentWindow.postMessage(payloadDelete, '*');
    }

    const goGet = () => {
        const payloadRead = {
            method: 'getData',
        }
        myIframe.contentWindow.postMessage(payloadRead, '*');
    }

    const goCall = () => {
        const payloadCallback = {
            method: 'getCall',
            value: 'callback received',
            callback: 'logMessage'
        }
        myIframe.contentWindow.postMessage(payloadCallback, '*');
    };

    const receiveMessageOrigin = (event) => {
        console.log('Origin: ', event.data);
    }

    get.addEventListener('click', goGet)
    callback.addEventListener('click', goCall)
    change.addEventListener('click', goWrite);
    remove.addEventListener('click', goRemove);
    window.addEventListener("message", receiveMessageOrigin);
};

document.addEventListener("DOMContentLoaded", crossDomainApp);