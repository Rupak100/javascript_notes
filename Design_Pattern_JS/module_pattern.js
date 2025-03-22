const Counter = (function () {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        },
        reset: function () {
            count = 0;
            console.log("Reset count:", count);
        }
    };
})();

Counter.increment(); // Count: 1
Counter.increment(); // Count: 2
Counter.decrement(); // Count: 1
Counter.reset(); // Reset count: 0
console.log(Counter.count); // ❌ Undefined (Encapsulation)
