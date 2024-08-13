document.addEventListener('DOMContentLoaded', function () {
    const empData = JSON.parse(localStorage.getItem('empData'));
    const myResultBody = document.getElementById('myResultBody');

    if (empData) {
       /* const row = document.createElement('tr');
        row.innerHTML = `
            <td>${empData.name}</td>
            <td>${empData.emp_code}</td>
            <td>${empData.designation}</td>
            <td>${empData.email}</td>
            <td>${empData.mobile}</td>
            `;*/
        document.getElementById("name").textContent = empData.name;
        document.getElementById('emp_code').textContent = empData.emp_code;
        document.getElementById('designation').textContent = empData.designation;
        document.getElementById('email').textContent = empData.email;
        document.getElementById('mobile').textContent = empData.mobile;
        //myResultBody.appendChild(row);
    }
    else {
        window.alert('No data found'); // Debug: No data found
    }
});
