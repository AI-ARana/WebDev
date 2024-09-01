// Ensures that the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Constructor function for Student objects
    function StudentM(firstName, lastName, age, course) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        };
    }

    let std = []; // Array to store student objects

    // Function to add a student from input fields
    function addStudentFromInput() {
        console.log("addStudentFromInput function called!");

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let age = document.getElementById("age").value;
        let course = document.getElementById("course").value;

        console.log("Form Values:", { firstName, lastName, age, course });

        if (firstName && lastName && age && course) {
            let newStudentM = new StudentM(firstName, lastName, age, course);
            std.push(newStudentM);
            display();
            document.getElementById("Student-form").reset();
        } else {
            alert("Please fill out all fields.");
        }
    }

    // Function to display all students
    function display() {
        let output = "<h2>Student List:</h2>";
        std.forEach(s => {
            output += `
                        Name: ${s.fullName()}<br>
                        Age: ${s.age}<br>
                        Course: ${s.course}<br><br>
                    `;
        });
        document.getElementById("std-output").innerHTML = output;
    }

    // Attach event listener to the button
    document.getElementById("addStudentBtn").addEventListener("click", addStudentFromInput);
});