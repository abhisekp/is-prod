# is-prod

[![travis build](https://img.shields.io/travis/ifreddyrondon/is-prod.svg?style=flat-square)](https://travis-ci.org/ifreddyrondon/is-prod)
[![codecov coverage](https://img.shields.io/codecov/c/github/ifreddyrondon/is-prod.svg?style=flat-square)](https://codecov.io/gh/ifreddyrondon/is-prod)
[![version](https://img.shields.io/npm/v/is-prod.svg?style=flat-square)](https://www.npmjs.com/package/is-prod)
[![downloads](https://img.shields.io/npm/dm/is-prod.svg?style=flat-square)](https://npm-stat.com/charts.html?package=is-prod&from=2017-05-27)
[![MIT License](https://img.shields.io/npm/l/is-prod.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Normalize the way of check if you are in a production|development|test environment.

Just check NODE_ENV for common names pattern like dev for development or prod for production

```
const isProd = require('is-prod');

/**
 * Logger levels:
 *  error: 0
 *  warn: 1
 *  info: 2
 *  verbose: 3
 *  debug: 4
 *  silly: 5
 */

const loggerLevel;

if (isProd.isProduction()) {
  // do not log debug, just warn and up!
  loggerLevel = 'warn'
} else {
  loggerLevel = 'debug'
}

... 

// log the current normalized NODE_ENV
log.debug(isProd.getNormalizedEnv())

```

## Check for production 

Check the NODE_ENV for **production** or **prod**.

    isProduction()
    

## Check for devlopment 

Check the NODE_ENV for **devlopment** or **dev**.

    isDevelopment()
    
## Check for test 

Check the NODE_ENV for **test**.

    isTest()
    
## Get NODE_ENV
 
1) Return the value of NODE_ENV.

    getEnv()

2) Return the normalized word for NODE_ENV

    getNormalizedEnv()
