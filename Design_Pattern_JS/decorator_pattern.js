// Base coffee class (Component)
class Coffee {
    getDescription() {
        return 'Coffee';
    }

    cost() {
        return 5; // Base cost of coffee
    }
}

// Abstract Decorator class
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee; // The coffee object to be decorated
    }

    getDescription() {
        return this.coffee.getDescription();
    }

    cost() {
        return this.coffee.cost();
    }
}



// Milk Decorator
class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, Milk`;
    }

    cost() {
        return this.coffee.cost() + 1; // Add $1 for milk
    }
}

// Sugar Decorator
class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, Sugar`;
    }

    cost() {
        return this.coffee.cost() + 0.5; // Add $0.50 for sugar
    }
}

// Client code
function main() {
    // Create a basic coffee
    let myCoffee = new Coffee();
    console.log(myCoffee.getDescription()); // Coffee
    console.log(`Cost: $${myCoffee.cost()}`); // Cost: $5

    // Add Milk
    myCoffee = new MilkDecorator(myCoffee);
    console.log(myCoffee.getDescription()); // Coffee, Milk
    console.log(`Cost: $${myCoffee.cost()}`); // Cost: $6

    // Add Sugar
    myCoffee = new SugarDecorator(myCoffee);
    console.log(myCoffee.getDescription()); // Coffee, Milk, Sugar
    console.log(`Cost: $${myCoffee.cost()}`); // Cost: $6.50
}

main();