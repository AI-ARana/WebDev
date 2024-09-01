// Constructor function for creating Student objects
function Student(firstName, lastName, age, specilization) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.specilization = specilization;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Function to create a new Student object and display it
function createStudent() {
    // Creating a new Student object
    let std1 = new Student("Amit", "Kumar", 21, "Artificial Intelligence");

    // Displaying the student's details
    let output = `
        Name: ${std1.fullName()}<br>
        Age: ${std1.age}<br>
        Specilization: ${std1.specilization}
    `;
    document.getElementById("student-output").innerHTML = output;
}
