// Base Logger class (Abstract Handler)
class Logger {
    constructor(nextLogger = null) {
        this.nextLogger = nextLogger;  // Stores reference to the next handler
    }

    log(level, message) {
        if (this.nextLogger) {  // If there's a next handler, forward the request
            this.nextLogger.log(level, message);
        }
    }
}

// Concrete Logger for INFO level
class InfoLogger extends Logger {
    log(level, message) {
        if (level === 'INFO') {
            console.log(`[INFO]: ${message}`);
        } else {
            super.log(level, message);  // Pass to next handler
        }
    }
}

// Concrete Logger for DEBUG level
class DebugLogger extends Logger {
    log(level, message) {
        if (level === 'DEBUG') {
            console.log(`[DEBUG]: ${message}`);
        } else {
            super.log(level, message);
        }
    }
}

// Concrete Logger for ERROR level
class ErrorLogger extends Logger {
    log(level, message) {
        if (level === 'ERROR') {
            console.log(`[ERROR]: ${message}`);
        } else {
            super.log(level, message);
        }
    }
}

// Creating the chain of responsibility
const errorLogger = new ErrorLogger();        // Last in chain (highest priority)
const debugLogger = new DebugLogger(errorLogger);  // Second in chain
const infoLogger = new InfoLogger(debugLogger);   // First in chain

// Testing the Chain
infoLogger.log('INFO', 'This is an info message.');
infoLogger.log('DEBUG', 'This is a debug message.');
infoLogger.log('ERROR', 'This is an error message.');
infoLogger.log('WARNING', 'This is a warning message.');  // Will be ignored (no handler)
