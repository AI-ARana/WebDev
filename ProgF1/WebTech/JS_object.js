// Defining a person object
let person = {
    firstName: "Anurag",
    lastName: "Rana",
    age: 38,
    occupation: "Associate Professor",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Function to display person details
function showPersonDetails() {
    let details = `
        Name: ${person.fullName()}<br>
        Age: ${person.age}<br>
        Occupation: ${person.occupation}
    `;
    document.getElementById("person-details").innerHTML = details;
}

// Function to update the person's name and show the updated object
function updatePersonName() {
    person.firstName = "Pankaj";
    person.lastName = "Vaidya";
    let updatedDetails = `
        Updated Name: ${person.fullName()}<br>
        Age: ${person.age}<br>
        Occupation: ${person.occupation}
    `;
    document.getElementById("updated-person").innerHTML = updatedDetails;
}
