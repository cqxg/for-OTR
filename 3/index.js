
const Generate = function () {

    const request = document.querySelector('.request');
    const res = document.querySelector('.res');
    request.addEventListener('click', e => {

        const xhr = new XMLHttpRequest();              //В данном задании я не совсем понял, что от меня требовалось.
        xhr.open("GET", "/response/res.txt", true);   //Организовал это так. Пример моей работы с запросами
        xhr.onload = function (e) {                  //Вы можете посмотреть по ссылке https://github.com/cqxg
            if (xhr.readyState === 4) {             //В частности, например https://github.com/cqxg/search
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    res.innerHTML = xhr.responseText;
                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);
    });

}

document.addEventListener("DOMContentLoaded", Generate);
