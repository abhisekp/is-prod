
/**
 * Environment helpers
 */
const isProduction = () => process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod';
const isDevelopment = () => process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev';
const isTest = () => process.env.NODE_ENV === 'test';
const getEnv = () => process.env.NODE_ENV;
const getNormalizedEnv = () => {
  if (isProduction()) {
    return 'production';
  } else if (isDevelopment()) {
    return 'development';
  } else if (isTest()) {
    return 'test';
  }
  return '';
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
};

