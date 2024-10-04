var studentData = JSON.parse(sessionStorage.getItem('students')) || [];

function updateDegreeOptions() {
    var programType = document.getElementById("programType").value;
    var degree = document.getElementById("degree");
    degree.innerHTML = "";

    if (programType === "UG") {
        degree.innerHTML += "<option value='BTech'>BTech</option>";
        degree.innerHTML += "<option value='BCA'>BCA</option>";
    } else if (programType === "PG") {
        degree.innerHTML += "<option value='MBA'>MBA</option>";
        degree.innerHTML += "<option value='MCA'>MCA</option>";
    } else if (programType === "Diploma") {
        degree.innerHTML += "<option value='Diploma in Engineering'>Diploma in Engineering</option>";
    } else if (programType === "Research") {
        degree.innerHTML += "<option value='PhD'>PhD</option>";
    }
}

function saveStudentData() {
    var name = document.getElementById("name").value;
    var registration = document.getElementById("registration").value;
    var programType = document.getElementById("programType").value;
    var degree = document.getElementById("degree").value;

    var student = {
        name: name,
        registration: registration,
        programType: programType,
        degree: degree,
        marks: {}
    };

    studentData.push(student);
    sessionStorage.setItem('students', JSON.stringify(studentData));
    alert('Student data saved!');
}

document.getElementById("searchRegID").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        searchStudent(); // Trigger search
    }
});

function searchStudent() {
    var regID = document.getElementById("searchRegID").value;
    var resultDiv = document.getElementById("searchResult");

    var student = studentData.find(s => s.registration === regID);
    if (student) {
        resultDiv.innerHTML = `<h4>Marksheet for ${student.name}</h4>
                               <p><strong>Registration:</strong> ${student.registration}</p>
                               <p><strong>Degree:</strong> ${student.degree}</p>
                               <p><button onclick="addMarks('${regID}')">Add Marks</button></p>`;
    } else {
        resultDiv.innerHTML = `<p>No student found with Registration ID ${regID}</p>`;
    }
}

function addMarks(regID) {
    window.location.href = `dmc.html?regID=${regID}`;
}
