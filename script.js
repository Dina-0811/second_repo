var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Salary"] = document.getElementById("Salary").value;
    formData["Role"] = document.getElementById("Role").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.ID;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Age;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Salary;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.Role;    
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Role").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = formData.Salary;
    selectedRow.cells[4].innerHTML = formData.Role;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("ID").value = '';
    document.getElementById("Name").value = '';
    document.getElementById("Age").value = '';
    document.getElementById("Salary").value = '';
    document.getElementById("Role").value = '';
    selectedRow = null;
}