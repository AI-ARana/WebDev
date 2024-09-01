function saveAndRedirect() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);

    const age = calculateAge(new Date(dob));
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;

    const studentData = {
        name: name,
        age: age,
        marks: [subject1, subject2, subject3, subject4, subject5],
        totalMarks: totalMarks,
        percentage: percentage.toFixed(2)
    };

    localStorage.setItem('studentData', JSON.stringify(studentData));
    window.location.href = 'result.html';
}

function calculateAge(dob) {
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}
