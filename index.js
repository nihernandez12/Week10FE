let id = 0;

//This is how the user will be able to insert their information for a reservation
document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+ 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-checkin-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-checkout-date').value;
    row.insertCell(4).innerHTML = document.getElementById('new-specialrequest').value;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    //This will erase the boxes after inserting the information into the table.
    document.getElementById('new-name').value = '';
    document.getElementById('new-specialrequest').value = '';
    document.getElementById('new-checkin-date').value = '';
    document.getElementById('new-checkout-date').value = '';
})

//This is the function to cancel the reservations after entering into the table
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Cancel Reservations';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
return btn;   

}