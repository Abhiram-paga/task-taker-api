const youtubeLogger = require("./youtubeLoggers");

let logger=null;

if (process.env.NODE_ENV !== 'production') {
  logger=youtubeLogger();
}

module.exports=logger;