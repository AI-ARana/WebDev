function saveAndRedirect() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);

    // Apply Validation
    if (!validateName(name)) {
        alert('Please enter a valid name (letters and spaces only).');
        return;
    }

    if (!validateMarks(subject1) || !validateMarks(subject2) ||
        !validateMarks(subject3) || !validateMarks(subject4) ||
        !validateMarks(subject5)) {
        alert('Please enter valid marks (between 0 and 100) for all subjects.');
        return;
    }

    if (!validateDOB(dob)) {
        alert('Please enter a valid date of birth (between 5 and 100 years old).');
        return;
    }


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

        marks: [subject1, subject2, subject3, subject4, subject5],
        totalMarks: totalMarks,
        percentage: percentage.toFixed(2)


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

function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    return nameRegex.test(name) && name.trim() !== "";
}

function validateNumber(number) {
    const numberRegex = /^[0-9]+$/; // Only digits
    return numberRegex.test(number) && number.trim() !== "";
}

function validateDOB(dob) {
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    return !isNaN(dobDate.getTime()) && age >= 5 && age <= 100;
}

function validateMarks(mark) {
    return !isNaN(mark) && mark >= 0 && mark <= 100;
}