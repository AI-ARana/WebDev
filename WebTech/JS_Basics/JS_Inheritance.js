// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
    }

    getArea() {
        return `Area calculation for ${this.name} is not implemented.`;
    }
}

// Child Class 1: Circle
class Circle extends Shape {
    constructor(radius) {
        super('Circle');  // Call parent class constructor with name 'Circle'
        this.radius = radius;
    }

    getArea() {
        return `The area of the ${this.name} is ${(Math.PI * Math.pow(this.radius, 2)).toFixed(2)} square units.`;
    }
}

// Child Class 2: Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');  // Call parent class constructor with name 'Rectangle'
        this.width = width;
        this.height = height;
    }

    getArea() {
        return `The area of the ${this.name} is ${(this.width * this.height).toFixed(2)} square units.`;
    }
}

// Using the classes
const myCircle = new Circle(5);
console.log(myCircle.getArea());

const myRectangle = new Rectangle(4, 7);
console.log(myRectangle.getArea());
