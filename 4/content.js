
const crossDomainApp = function () {
    const LOCAL_STORAGE_KEY = 'table';
    const INITIAL_STATE = [];

    const table = document.querySelector('#table');
    const change = document.querySelector('#change');
    const input = document.querySelector('#input');
    const deleteButton = '<input type="button" value="DELETE" class="del"/>';

    // ---------------------------- Local Storage  ----------------------------------
    const getData = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || INITIAL_STATE;
    const setData = (data) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    // ------------------------------------------------------------------------------

    // ---------------------------- Table Manipulation ------------------------------
    const renderTable = (data) => {
        if (data) {
            data.forEach(row => addRow(row.value));
        }
    }

    const addRow = (value) => {
        const row = table.insertRow();
        row.setAttribute('id', `${value}_${table.rows.length}`);

        row.insertCell().innerHTML = row.sectionRowIndex;
        row.insertCell().innerHTML = value;
        row.insertCell().innerHTML = deleteButton;
        return row;
    };

    const deleteRow = (target) => {
        const row = target.parentNode.parentNode;
        row.remove();
    }
    // ------------------------------------------------------------------------------

    const clearInput = () => {
        input.value = '';
    }

    // ----------------------------- LS Manipulation --------------------------------
    const addItem = (item) => {
        const tableData = getData();
        tableData.push(item);
        setData(tableData);
    };

    const removeItem = (item) => {
        const tableData = getData();
        const newTableData = tableData.filter((row) => row.key !== item.key);
        setData(newTableData);
    }
    // ------------------------------------------------------------------------------

    const changeHadler = () => {
        const value = input.value;

        const row = addRow(value);

        const item = {
            key: row.getAttribute('id'),
            value: value,
        }
        addItem(item);

        clearInput();

        console.log('Данные добавлены !');
    };

    const deleteHandler = (e) => {
        const target = e.target;
        const isDeleteButton = target.classList.contains('del');

        if (isDeleteButton) {
            const row = target.parentNode.parentNode;

            const item = {
                key: row.getAttribute('id'),
                value: row.childNodes[1].innerText,
            }
            removeItem(item);

            deleteRow(target);

            console.log('Данные удалены !');
        };
    };

    const init = () => {
        const tableData = getData();
        renderTable(tableData);
    }

    change.addEventListener('click', changeHadler);
    table.addEventListener('click', deleteHandler);
    window.addEventListener('load', init);
};

document.addEventListener('DOMContentLoaded', crossDomainApp);