const crossDomainApp = () => {
    const LOCAL_STORAGE_KEY = 'table';
    const INITIAL_STATE = [];

    const table = document.querySelector('.table-wrapper');
    const change = document.querySelector('#change');
    const input = document.querySelector('#input');
    const row_template = document.querySelector('#row_template');
    const tableBody = document.querySelector('.divTableBody');

    // ---------------------------- Local Storage  ----------------------------------
    const getData = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || INITIAL_STATE;
    const setData = (data) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    // ------------------------------------------------------------------------------

    // ---------------------------- Table Manipulation ------------------------------
    const renderTable = (data) => {
        tableBody.innerHTML = '';
        if (data) {
            data.forEach((row, index) => addRow(row, index));
        }
    }

    const addRow = (data, index) => {
        const { key, value } = data;

        const fragment = document.createDocumentFragment();
        const rowFragment = document.importNode(row_template.content, true);

        const row = rowFragment.querySelector('.divTableRow');
        row.id = key;

        const keyCell = rowFragment.querySelector('#key');
        keyCell.innerText = index;

        const valueCell = rowFragment.querySelector('#value');
        valueCell.innerText = value;

        fragment.appendChild(rowFragment);

        tableBody.appendChild(fragment);

        return row;
    }

    // ------------------------------------------------------------------------------


    // ----------------------------- Helpers ----------------------------------------
    const clearInput = () => {
        input.value = '';
    }

    const uniqueid = () => {
        let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            const ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);

        return (idstr);
    }
    // ------------------------------------------------------------------------------

    // ----------------------------- LS Manipulation --------------------------------
    const addItem = (value) => {
        const item = {
            key: uniqueid(),
            value,
        };

        const tableData = getData();
        tableData.push(item);
        setData(tableData);
        renderTable(tableData);
    };

    const removeItem = (key) => {
        const tableData = getData();
        const newTableData = tableData.filter((row) => row.key !== key);
        setData(newTableData);
        renderTable(newTableData);
    }
    // ------------------------------------------------------------------------------

    // ---------------------------- Handlers ----------------------------------------
    const addHandler = () => {
        const value = input.value;

        addItem(value);

        clearInput();

        console.log('Данные добавлены !');
    };

    const deleteHandler = (e) => {
        const target = e.target;
        const isDeleteButton = target.classList.contains('del');

        if (isDeleteButton) {
            const key = target.parentNode.parentNode.id;
            removeItem(key);

            console.log('Данные удалены !');
        };
    };

    const initHandler = () => {
        const tableData = getData();
        renderTable(tableData);
    }
    // ------------------------------------------------------------------------------
    // ------------------------------ Answers & Listen -------------------------------------

    function receiveMessage(e, data) {
        if (e.origin !== "*")
            var payload = e.data;

        switch (payload.method) {
            case 'setData':
                addItem(payload.value);
                break;
            // case 'get':
            //     var parent = window.parent;
            //     var data = localStorage.getItem(payload.key);
            //     parent.postMessage(data, "*");
            //     break;
            case 'removeData':
                removeItem(payload.value)
                break;
            case 'getData':
                    renderTable(data)
                break;
        }
    }

    window.addEventListener("message", receiveMessage);
    change.addEventListener('click', addHandler);
    table.addEventListener('click', deleteHandler);
    window.addEventListener('load', initHandler);
};

document.addEventListener('DOMContentLoaded', crossDomainApp);