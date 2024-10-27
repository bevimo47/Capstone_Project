
function fetchData(tableName) {
    $.get(`/get_data/${tableName}`, function(data) {
        let tableBody = $(`#${tableName}Table tbody`);
        tableBody.empty();
        data.forEach(item => {
            let row = `<tr>
                <td>${item.id}</td>
                <td>${item.column1}</td>
                <td>${item.column2}</td>
                <td><button class="btn btn-danger" onclick="deleteEntry(${item.id}, '${tableName}')">Delete</button></td>
            </tr>`;
            tableBody.append(row);
        });
    });
}

function addData(tableName) {
    let newData = {
        column1: $('#newColumn1').val(),
        column2: $('#newColumn2').val(),
        // Add more fields as necessary
    };
    $.post(`/add_data/${tableName}`, JSON.stringify(newData), function(response) {
        alert(response.message);
        fetchData(tableName); // Refresh the table data
    }, 'json');
}

// Call fetchData for the relevant tab on load
$(document).ready(function() {
    fetchData('product_cost');
});