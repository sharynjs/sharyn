const {
  httpServer,
  serverlessDeploy,
  serverlessOffline,
  waitDockerPgReady,
  webpackDevServer,
} = require('.')

test('commands', () => {
  expect(httpServer()).toBe('http-server   --cors -g')
  expect(httpServer()).toBe('http-server   --cors -g')
  expect(httpServer({ folder: 'abc' })).toBe('http-server abc  --cors -g')
  expect(httpServer({ folder: 'abc', port: 1234 })).toBe('http-server abc -p 1234 --cors -g')

  expect(serverlessDeploy()).toBe('serverless deploy ')
  expect(serverlessDeploy('abc')).toBe('serverless deploy -s abc')

  expect(serverlessOffline()).toBe('serverless offline  ')
  expect(serverlessOffline({ stage: 'abc' })).toBe('serverless offline -s abc ')
  expect(serverlessOffline({ stage: 'abc', port: 1234 })).toBe('serverless offline -s abc -P 1234')

  expect(() => waitDockerPgReady()).toThrow()
  expect(waitDockerPgReady('abc')).toBe(
    'until docker run --rm --link db:pg --net abc postgres:latest pg_isready -U postgres -h pg; do sleep 1; done'
  )

  expect(webpackDevServer()).toBe('webpack-dev-server ')
  expect(webpackDevServer(1234)).toBe('webpack-dev-server --port 1234')
})
