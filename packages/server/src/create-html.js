// @flow

import serialize from 'serialize-javascript'

// flow-disable-next-line
import { dirChecksum } from '@sharyn/check-setup'
import {
  API_URL, // Note: Not used in Sharyn boilerplate, but useful for SPAs
  SSE_URL, // Note: Not used in Sharyn boilerplate, but useful for SPAs
  IS_DEV_ENV,
  NO_VERSION_VALIDATION,
  NODE_ENV,
  TURN_OFF_SW,
  WDS_PORT,
  // flow-disable-next-line
} from '@sharyn/env'

const preloadedState = serialize({
  env: {
    API_URL,
    SSE_URL,
    IS_DEV_ENV,
    SERVER_VERSION: NO_VERSION_VALIDATION
      ? null
      : dirChecksum('src', ['package.json', 'yarn.lock']),
    isOnline: true,
    isServerRender: true,
  },
})

const injections = [
  ['"%%PRELOADED_STATE%%"', preloadedState],
  [
    '%%BUNDLE_URL%%',
    NODE_ENV === 'production'
      ? '/static/js/bundle.js'
      : `http://localhost:${WDS_PORT || 8072}/static/js/bundle.js`,
  ],
  [
    '<!-- %%SERVICE_WORKER%% -->',
    TURN_OFF_SW
      ? ''
      : "<script>navigator.serviceWorker && window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))</script>",
  ],
]

const createHtml = (rawIndexHtml: string) =>
  injections.reduce(
    (currentHtml, injection) => currentHtml.replace(injection[0], injection[1]),
    rawIndexHtml,
  )

export default createHtml
