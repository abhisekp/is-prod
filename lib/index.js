/**
 * Environment helpers
 */
const isProduction = () => /^prod(uction)?$/.test(process.env.NODE_ENV);
const isDevelopment = () => /^dev(elopment)?$/.test(process.env.NODE_ENV) || process.env.NODE_ENV == null;
const isDebug = () => !!process.env.DEBUG || /^debug$/i.test(process.env.NODE_ENV);
const isTest = () => process.env.NODE_ENV === 'test';
const getEnv = () => process.env.NODE_ENV;
const getNormalizedEnv = () => {
  if (isProduction()) {
    return 'production';
  } else if (isDevelopment()) {
    return 'development';
  } else if (isTest()) {
    return 'test';
  } else if (isDebug() && !process.env.DEBUG) {
    // meaning DEBUG is from ENV
    return 'debug';
  }
  return getEnv();
};

/**
 * env
 */
module.exports = {
  getEnv,
  getNormalizedEnv,
  isProduction,
  isDevelopment,
  isTest,
  isDebug,
};
