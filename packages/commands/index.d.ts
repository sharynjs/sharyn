export function httpServer(options?: object): string
export function serverlessDeploy(port?: string): string
export function serverlessOffline(options?: object): string
export function waitDockerPgReady(network: string): string
export function webpackDevServer(port?: string): string

export const DOCKER_COMPOSE_UP: string
export const WEBPACK_PROD: string
export const SHX_COPY_PUBLIC_TO_DIST: string
export const SHX_RM_DIST_DOTWEBPACK: string

declare const _default: {
  httpServer: typeof httpServer
  serverlessDeploy: typeof serverlessDeploy
  serverlessOffline: typeof serverlessOffline
  waitDockerPgReady: typeof waitDockerPgReady
  webpackDevServer: typeof webpackDevServer
  DOCKER_COMPOSE_UP: typeof DOCKER_COMPOSE_UP
  WEBPACK_PROD: typeof WEBPACK_PROD
  SHX_COPY_PUBLIC_TO_DIST: typeof SHX_COPY_PUBLIC_TO_DIST
  SHX_RM_DIST_DOTWEBPACK: typeof SHX_RM_DIST_DOTWEBPACK
}

export default _default
