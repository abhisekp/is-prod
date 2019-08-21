const env = require('./../lib');
const { afterEach, describe, it } = require('mocha');
const { expect } = require('chai');

const realEnv = Object.assign({}, process.env);

describe('is prod', () => {
  beforeEach(() => {
    delete process.env.NODE_ENV;
    delete process.env.DEBUG;
  });

  afterEach(() => {
    process.env = realEnv;
  });

  it('Should have defined specific properties', () => {
    expect(env).to.have.property('isProduction');
    expect(env).to.have.property('isDevelopment');
    expect(env).to.have.property('isDebug');
    expect(env).to.have.property('isTest');
    expect(env).to.have.property('getEnv');
    expect(env).to.have.property('getNormalizedEnv');
  });

  describe('isProduction', () => {
    it('return true when NODE_ENV is production', () => {
      process.env.NODE_ENV = 'production';
      const result = env.isProduction();
      expect(result).to.be.true;
    });

    it('return true when NODE_ENV is prod', () => {
      process.env.NODE_ENV = 'prod';
      const result = env.isProduction();
      expect(result).to.be.true;
    });

    it('return false when NODE_ENV is test', () => {
      process.env.NODE_ENV = 'test';
      const result = env.isProduction();
      expect(result).to.be.false;
    });

    it('return false when NODE_ENV is empty', () => {
      process.env.NODE_ENV = '';
      const result = env.isProduction();
      expect(result).to.be.false;
    });
  });

  describe('isDevelopment', () => {
    it('return true when NODE_ENV is development', () => {
      process.env.NODE_ENV = 'development';
      const result = env.isDevelopment();
      expect(result).to.be.true;
    });

    it('return true when NODE_ENV is dev', () => {
      process.env.NODE_ENV = 'dev';
      const result = env.isDevelopment();
      expect(result).to.be.true;
    });

    it('return false when NODE_ENV is prod', () => {
      process.env.NODE_ENV = 'prod';
      const result = env.isDevelopment();
      expect(result).to.be.false;
    });

    it('return false when NODE_ENV is empty', () => {
      process.env.NODE_ENV = '';
      const result = env.isDevelopment();
      expect(result).to.be.false;
    });
  });

  describe('isDebug', () => {
    it('return true when NODE_ENV is debug', () => {
      process.env.NODE_ENV = 'DEBUG';
      const result = env.isDebug();
      expect(result).to.be.true;
    });

    it('return true when DEBUG env variable is set truthy value', () => {
      process.env.DEBUG = '1';
      const result = env.isDebug();
      expect(result).to.be.true;
    });

    it('return false when DEBUG env variable is not defined', () => {
      delete process.env.DEBUG;
      const result = env.isDebug();
      expect(result).to.be.false;
    });

    it('return false when NODE_ENV is empty', () => {
      process.env.NODE_ENV = '';
      const result = env.isDebug();
      expect(result).to.be.false;
    });
  });

  describe('isTest', () => {
    it('return true when NODE_ENV is test', () => {
      process.env.NODE_ENV = 'test';
      const result = env.isTest();
      expect(result).to.be.true;
    });

    it('return false when NODE_ENV is dev', () => {
      process.env.NODE_ENV = 'dev';
      const result = env.isTest();
      expect(result).to.be.false;
    });

    it('return false when NODE_ENV is empty', () => {
      process.env.NODE_ENV = '';
      const result = env.isTest();
      expect(result).to.be.false;
    });
  });

  describe('getEnv', () => {
    it('return undefined when NODE_ENV is not defined', () => {
      process.env.NODE_ENV = undefined;
      const result = env.getEnv();
      expect(result).to.be.equal(undefined);
    });

    it('return foo when NODE_ENV is foo', () => {
      process.env.NODE_ENV = 'foo';
      const result = env.getEnv();
      expect(result).to.be.equal('foo');
    });
  });

  describe('getNormalizedEnv', () => {
    it('return development when NODE_ENV is not defined', () => {
      delete process.env.NODE_ENV;
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('development');
    });

    it('return original value when NODE_ENV is not recognized', () => {
      process.env.NODE_ENV = 'foo';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('foo');
    });

    it('return production when NODE_ENV is prod', () => {
      process.env.NODE_ENV = 'prod';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('production');
    });

    it('return development when NODE_ENV is dev', () => {
      process.env.NODE_ENV = 'dev';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('development');
    });

    it('return test when NODE_ENV is test', () => {
      process.env.NODE_ENV = 'test';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('test');
    });

    it('return debug when NODE_ENV is DEBUG or debug', () => {
      process.env.NODE_ENV = 'DEBUG';
      const result1 = env.getNormalizedEnv();
      expect(result1).to.be.equal('debug');

      process.env.NODE_ENV = 'debug';
      const result2 = env.getNormalizedEnv();
      expect(result2).to.be.equal('debug');
    });

    it('return test when NODE_ENV is test but DEBUG variable is defined', () => {
      process.env.NODE_ENV = 'test';
      process.env.DEBUG = 'app*';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('test');
      expect(env.isDebug()).to.be.true;
    });
  });
});
