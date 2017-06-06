const env = require('./../lib');
const { afterEach, describe, it } = require('mocha');
const { expect } = require('chai');

const realEnv = Object.assign({}, process.env);

describe('is prod', () => {
  afterEach(() => {
    process.env = realEnv;
  });

  it('Should have defined specific properties', () => {
    expect(env).to.have.property('isProduction');
    expect(env).to.have.property('isDevelopment');
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

  describe('getEnv', () => {
    it('return empty when NODE_ENV is not defined', () => {
      process.env.NODE_ENV = undefined;
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('');
    });

    it('return empty when NODE_ENV is not recognized', () => {
      process.env.NODE_ENV = 'foo';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('');
    });

    it('return production when NODE_ENV is prod', () => {
      process.env.NODE_ENV = 'prod';
      const result = env.getNormalizedEnv();
      expect(result).to.be.equal('production');
    });
  });
});
