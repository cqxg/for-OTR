
const Generate = () => {

    const request = document.querySelector('.request');
    const res = document.querySelector('.res');

    firstRequest = () => {
        fetch('/response/res.json')
            .then(res => res.json())
            .then(response => {
                secondRequest()
            })
            .catch(err => console.log(err));
    };

    secondRequest = () => {
        fetch('/response/res.json')
            .then(res => res.json())
            .then(response => {
                console.log(response.data);
                res.innerHTML = response.data;
            })
            .catch(err => console.log(err));
    };

    request.addEventListener('click', firstRequest);
};

document.addEventListener("DOMContentLoaded", Generate);
