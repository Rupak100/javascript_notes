
// Using the factory function 
const CarPrototype = {
    startEngine() {
        console.log(`${this.model} engine started.`);
    }
};

// Factory function to create objects using prototype
function createCar(model) {
    const car = Object.create(CarPrototype);
    car.model = model;
    return car;
}

const car1 = createCar("Tesla Model S");
const car2 = createCar("BMW X5");

car1.startEngine(); // Tesla Model S engine started.
car2.startEngine(); // BMW X5 engine started.
