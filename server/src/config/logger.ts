import winston from 'winston';

const { combine, timestamp, errors, json, colorize, printf } = winston.format;

const prettyFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
  const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
  const stackStr = stack ? `\n${stack}` : '';
  return `${timestamp} [${level}] ${message}${metaStr}${stackStr}`;
});

const logLevel = process.env.LOG_LEVEL || 'debug';
const logFormat = process.env.LOG_FORMAT || 'pretty';

export const logger = winston.createLogger({
  level: logLevel,
  defaultMeta: { service: 'growright-api' },
  transports: [
    new winston.transports.Console({
      format:
        logFormat === 'json'
          ? combine(timestamp(), errors({ stack: true }), json())
          : combine(
              colorize(),
              timestamp({ format: 'HH:mm:ss' }),
              errors({ stack: true }),
              prettyFormat
            ),
    }),
  ],
});

// Production file transport
if (process.env.NODE_ENV === 'production') {
  logger.add(
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: combine(timestamp(), errors({ stack: true }), json()),
      maxsize: 10_000_000, // 10 MB
      maxFiles: 5,
    })
  );
  logger.add(
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: combine(timestamp(), errors({ stack: true }), json()),
      maxsize: 10_000_000,
      maxFiles: 10,
    })
  );
}
