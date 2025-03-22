// Observer Interface
interface Observer {
    update(news: string): void;
}

// Subject Interface
interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(news: string): void;
}

// Concrete Subject (Publisher)
class NewsPublisher implements Subject {
    private observers: Observer[] = [];

    // Subscribe to updates
    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    // Unsubscribe from updates
    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(sub => sub !== observer);
    }

    // Notify all subscribers
    notify(news: string): void {
        this.observers.forEach(observer => observer.update(news));
    }

    // Publish a new article
    publishNews(news: string): void {
        console.log(`📰 News Published: ${news}`);
        this.notify(news);
    }
}

// Concrete Observer (Subscriber)
class User implements Observer {
    constructor(private name: string) {}

    update(news: string): void {
        console.log(`📢 ${this.name} received news update: ${news}`);
    }
}

// Example Usage
const publisher = new NewsPublisher();

const alice = new User("Alice");
const bob = new User("Bob");

publisher.subscribe(alice);
publisher.subscribe(bob);

publisher.publishNews("TypeScript 5.2 Released! 🚀");

// Unsubscribe Bob
publisher.unsubscribe(bob);

publisher.publishNews("New AI Model Announced! 🤖");
