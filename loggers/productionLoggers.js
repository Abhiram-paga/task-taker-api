const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message,timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const productionLogger = () => {
 return createLogger({
    level: "info",
    format: combine(format.colorize(),
    timestamp(),
    myFormat
  ),
    //defaultMeta: { service: "user-service" },
    transports: [
      //
      // - Write all logs with importance level of `error` or higher to `error.log`
      //   (i.e., error, fatal, but not other levels)
      //
      new transports.Console(),
      new transports.File({filename:"myErrors.log"})
      //
      // - Write all logs with importance level of `info` or higher to `combined.log`
      //   (i.e., fatal, error, warn, and info, but not trace)
      //
    //   new winston.transports.File({ filename: "combined.log" }),
    ],
  });
};

module.exports = productionLogger;
