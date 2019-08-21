declare module 'is-prod' {
  export function isProduction(): boolean;
  export function isDebug(): boolean;
  export function isDevelopment(): boolean;
  export function isTest(): boolean;
  export function getEnv(): string;
  export function getNormalizedEnv(): string;
}
