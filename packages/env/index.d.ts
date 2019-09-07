// This is bypassing all type checking in order to use the named import
// syntax to access the env properties. Without it, TypeScript breaks on:
// import { SOME_ENV_VAR } from '@sharyn/env'

declare module '@sharyn/env'
