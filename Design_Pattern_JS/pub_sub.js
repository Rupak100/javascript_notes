const PubSub = {
    events: {},

    // Subscribe to an event
    subscribe: function (eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []; // Create event list if it doesn't exist
        }
        this.events[eventName].push(callback);
    },

    // Publish an event (Notify all subscribers)
    publish: function (eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    },

    // Unsubscribe from an event
    unsubscribe: function (eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
        }
    }
};

// Example Usage

// Subscriber 1
const subscriber1 = (data) => console.log("Subscriber 1 received:", data);
PubSub.subscribe("message", subscriber1);

// Subscriber 2
const subscriber2 = (data) => console.log("Subscriber 2 received:", data);
PubSub.subscribe("message", subscriber2);

// Publishing event
PubSub.publish("message", "Hello, Pub-Sub! 🚀");

// Unsubscribe Subscriber 1
PubSub.unsubscribe("message", subscriber1);

console.log("After unsubscribing Subscriber 1:");

// Publishing again
PubSub.publish("message", "Another event published!");
