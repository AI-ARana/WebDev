// JavaScript Object Example
const car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2024,
    features: ['Autopilot', 'Electric', 'Ludicrous Mode'],
    owner: {
        firstName: 'John',
        lastName: 'Doe',
        age: 35,
        address: {
            street: '123 Elm St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001'
        }
    },
    startEngine: function() {
        return `${this.make} ${this.model} is starting...`;
    },
    getOwnerFullName: function() {
        return `${this.owner.firstName} ${this.owner.lastName}`;
    },
    // Dynamic property
    'color': 'red',

    // Method to display all information
    displayInfo: function() {
        let info = `
      Make: ${this.make}<br>
      Model: ${this.model}<br>
      Year: ${this.year}<br>
      Features: ${this.features.join(', ')}<br>
      Owner: ${this.getOwnerFullName()}<br>
      Address: ${this.owner.address.street}, ${this.owner.address.city}, ${this.owner.address.state} ${this.owner.address.zip}<br>
      Color: ${this.color}<br>
    `;
        document.write(info);
    }
};

// Displaying object properties and methods using console.log
console.log('Car Make:', car.make);
console.log('Car Model:', car.model);
console.log('Car Year:', car.year);
console.log('Car Features:', car.features);
console.log('Owner Name:', car.getOwnerFullName());
console.log('Car Color:', car['color']);
console.log(car.startEngine());

// Display all info on the webpage
car.displayInfo();
