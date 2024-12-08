import winston from 'winston';
import { Config } from '.';

// Create a Winston logger instance
const logger = winston.createLogger({
  // Set the default log level; logs at this level and above will be captured
  level: 'info',

  // Define default metadata to be included with all log entries
  defaultMeta: {
    serviceName: 'auth-service', // Identify the service generating the log
  },

  // Define the format of log entries
  format: winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to each log
    winston.format.json() // Format logs as JSON for structured logging
  ),

  // Define the transports (destinations) for log entries
  transports: [
    // File transport for combined logs (info and above)
    new winston.transports.File({
      dirname: 'logs', // Directory for the log file
      filename: 'combined.log', // Name of the log file
      level: 'info', // Log entries with level "info" and above will be captured
      silent: Config.NODE_ENV === 'test', // Disable logging in test environment
    }),

    // File transport specifically for error logs
    new winston.transports.File({
      dirname: 'logs', // Directory for the log file
      filename: 'error.log', // Name of the error log file
      level: 'error', // Only log entries with "error" level will be captured
      silent: Config.NODE_ENV === 'test', // Disable logging in test environment
    }),

    // Console transport for displaying logs in the terminal
    new winston.transports.Console({
      level: 'info', // Log entries with level "info" and above will be displayed
      silent: Config.NODE_ENV === 'test', // Disable logging in test environment
    }),
  ],
});

// Export the logger instance for use throughout the application
export default logger;
