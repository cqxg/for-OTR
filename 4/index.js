
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

    // const goCall = () => {
    //     const payloadCallback = {
    //         method: '*',
    //         callback: () => console.log('hi')
    //     }
    //     myIframe.contentWindow.postMessage(payloadCallback, '*');
    // }

    get.addEventListener('click', goGet)
    // callback.addEventListener('click', goCall)
    change.addEventListener('click', goWrite);
    remove.addEventListener('click', goRemove);


    // const payloadRead = {
    //     method: 'getData',
    // }

    // const payloadCallback = {
    //     method: '*',
    //     callback: () => console.log('hi')
    // }

    // if (payload.callback) {
    //     payload.callback();
    // function receiveMessage(e) {
    //     if (e.origin !== "*")
    //         var payload = e.data;
    //     console.log(payload);
    // }

    // window.addEventListener("message", receiveMessage);
    // }

};

document.addEventListener("DOMContentLoaded", crossDomainApp);