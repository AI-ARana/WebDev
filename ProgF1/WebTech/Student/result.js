document.addEventListener('DOMContentLoaded', function () {
    const studentData = JSON.parse(localStorage.getItem('studentData'));
    const resultBody = document.getElementById('resultBody');

    if (studentData) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${studentData.name}</td>
            <td>${studentData.age}</td>
            <td>${studentData.marks[0]}</td>
            <td>${studentData.marks[1]}</td>
            <td>${studentData.marks[2]}</td>
            <td>${studentData.marks[3]}</td>
            <td>${studentData.marks[4]}</td>
            <td>${studentData.totalMarks}</td>
            <td>${studentData.percentage}%</td>
        `;
        resultBody.appendChild(row);
    }
});
