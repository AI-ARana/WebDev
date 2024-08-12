document.addEventListener('DOMContentLoaded', function () {
    const studentData = JSON.parse(localStorage.getItem('studentData'));
    const studentData1 = JSON.parse(localStorage.getItem('studentData1'));

    const resultBody = document.getElementById('resultBody');
    const resultBody1 = document.getElementById('resultBody1');
    if (studentData) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${studentData.name}</td>
            <td>${studentData.age}</td>
            <td>${studentData.grade}</td>
        `;
        resultBody.appendChild(row);
    }

    if (studentData1) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${studentData1.marks[0]}</td>
        <td>${studentData1.marks[1]}</td>
        <td>${studentData1.marks[2]}</td>
        <td>${studentData1.marks[3]}</td>
        <td>${studentData1.marks[4]}</td>
        <td>${studentData1.totalMarks}</td>
        <td>${studentData1.percentage}%</td>
    `;
        resultBody1.appendChild(row);
    }
    else {
        window.alert('No data found for studentData1'); // Debug: No data found
    }
});
