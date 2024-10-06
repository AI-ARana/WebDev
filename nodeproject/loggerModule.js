const EventEmitter = require('events');

// Logger class extends EventEmitter, which allows it to emit custom log events
class Logger extends EventEmitter {
    //logInfo method print log messages at info level and emit event for log
    logInfo(message) {
        this.emit('log', { level: 'info', message });
        console.log(`INFO: ${message}`);
    }
    // logWarning method print log messages at warn level and emit event for log
    logWarning(message) {
        this.emit('log', { level: 'warning', message });
        console.warn(`WARNING: ${message}`);
    }
    //logError method print log messages at error level and emit event for log
    logError(message) {
        this.emit('log', { level: 'error', message });
        console.error(`ERROR: ${message}`);
    }
}

module.exports = Logger;
