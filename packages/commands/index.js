const commands = {
  DOCKER_COMPOSE_UP: 'docker-compose up -d',
  WEBPACK_PROD: 'webpack -p',
  SHX_COPY_PUBLIC_TO_DIST: 'shx cp -r public dist',
  SHX_RM_DIST_DOTWEBPACK: 'shx rm -rf dist .webpack',

  httpServer: ({ folder, port } = {}) =>
    `http-server ${folder || ''} ${port ? `-p ${port}` : ''} --cors -g`,
  serverlessDeploy: stage => `serverless deploy ${stage ? `-s ${stage}` : ''}`,
  serverlessOffline: ({ stage, port } = {}) =>
    `serverless offline ${stage ? `-s ${stage}` : ''} ${port ? `-P ${port}` : ''}`,
  waitDockerPgReady: network => {
    if (!network) {
      throw Error('waitDockerPgReady requires a Docker network argument')
    }
    return `until docker run --rm --link db:pg --net ${network} postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  },
  webpackDevServer: port => `webpack-dev-server ${port ? `--port ${port}` : ''}`,
}

module.exports = commands
