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

    const grade = calculateGrade(percentage);


    const studentData = {
        name: name,
        age: age,
        grade:grade
    };
    localStorage.setItem('studentData', JSON.stringify(studentData));
    window.location.href = 'r1.html';
    const studentData1 = {

       // marks: [subject1, subject2, subject3, subject4, subject5],
        //totalMarks: totalMarks,
       // percentage: percentage.toFixed(2)
        marks: [85, 90, 78, 92, 88],
        totalMarks: 433,
        percentage: 86.6

    };
    localStorage.setItem('studentData1', JSON.stringify(studentData1));
    window.location.href = 'r1.html';
}

function calculateAge(dob) {
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}
function calculateGrade(percentage)
{
    let grade= 'NaN';
    if (percentage>=90)
    {
        grade="A"
    } else if (percentage >= 80) {
    grade = 'B';
    } else if (percentage >= 70) {
    grade = 'C';
    } else if (percentage >= 50) {
    grade = 'Pass';
    } else {
    grade = 'Fail';
    }
    return grade;
}