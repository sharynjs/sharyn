const { hasPackage } = require('@sharyn/check-setup')

const config = {
  extends: [],
  plugins: [],
  env: {
    browser: true,
  },
  globals: {},
  rules: {
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'no-unexpected-multiline': 2,
    semi: [2, 'never'],
  },
  settings: {},
}

if (hasPackage('eslint-config-airbnb' && hasPackage('eslint-config-airbnb'))) {
  throw Error(
    'Your package.json should either have eslint-config-airbnb or eslint-config-airbnb-base as a dependency but not both',
  )
}

if (hasPackage('eslint-config-airbnb')) {
  config.extends.push('airbnb')

  if (!hasPackage('eslint-plugin-import')) {
    throw Error('eslint-config-airbnb requires having eslint-plugin-import installed')
  }
  if (!hasPackage('eslint-plugin-react')) {
    throw Error('eslint-config-airbnb requires having eslint-plugin-react installed')
  }
  if (!hasPackage('eslint-plugin-jsx-a11y')) {
    throw Error('eslint-config-airbnb requires having eslint-plugin-jsx-a11y installed')
  }
}

if (hasPackage('eslint-config-airbnb-base')) {
  config.extends.push('airbnb-base')

  if (!hasPackage('eslint-plugin-import')) {
    throw Error('eslint-config-airbnb-base requires having eslint-plugin-import installed')
  }
}

if (hasPackage('jest-puppeteer')) {
  config.globals.page = true
  config.globals.browser = true
  config.globals.jestPuppeteer = true
}

if (hasPackage('jest')) {
  config.env.jest = true
}

if (hasPackage('eslint-plugin-flowtype')) {
  config.extends.push('plugin:flowtype/recommended')
  config.plugins.push('flowtype')

  if (!hasPackage('flow-bin')) {
    throw Error('eslint-plugin-flowtype requires having flow-bin installed')
  }
  if (!hasPackage('babel-eslint')) {
    throw Error('eslint-plugin-flowtype requires having babel-eslint installed')
  }
}

if (hasPackage('eslint-plugin-prettier')) {
  config.plugins.push('prettier')
  config.rules['prettier/prettier'] = 2

  if (!hasPackage('prettier')) {
    throw Error('eslint-plugin-prettier requires having prettier installed')
  }
}

if (hasPackage('eslint-config-prettier')) {
  config.extends.push('prettier')

  if (hasPackage('react')) {
    config.extends.push('prettier/react')
  }
  if (hasPackage('flow-bin')) {
    config.extends.push('prettier/flowtype')
  }

  if (!hasPackage('prettier')) {
    throw Error('eslint-config-prettier requires having prettier installed')
  }
}

if (hasPackage('eslint-plugin-react')) {
  config.rules['react/require-default-props'] = 0
  config.rules['react/jsx-filename-extension'] = [1, { extensions: ['.js'] }]

  if (!hasPackage('react')) {
    throw Error('eslint-plugin-react requires having react installed')
  }
}

if (hasPackage('eslint-plugin-import')) {
  config.rules['import/prefer-default-export'] = 0
}

if (hasPackage('eslint-import-resolver-babel-module')) {
  config.settings['import/resolver'] = { 'babel-module': {} }

  if (!hasPackage('@babel/core')) {
    throw Error('eslint-import-resolver-babel-module requires having @babel/core installed')
  }
  if (!hasPackage('babel-plugin-module-resolver')) {
    throw Error(
      'eslint-import-resolver-babel-module requires having babel-plugin-module-resolver installed',
    )
  }
  if (!hasPackage('eslint-plugin-import')) {
    throw Error(
      'eslint-import-resolver-babel-module requires having eslint-plugin-import installed',
    )
  }
}

if (hasPackage('@babel/plugin-proposal-do-expressions')) {
  config.parser = 'babel-eslint'
  if (!hasPackage('babel-eslint')) {
    throw Error('@babel/plugin-proposal-do-expressions requires having babel-eslint installed')
  }
}

if (hasPackage('@babel/plugin-proposal-nullish-coalescing-operator')) {
  config.parser = 'babel-eslint'
  if (!hasPackage('babel-eslint')) {
    throw Error(
      '@babel/plugin-proposal-nullish-coalescing-operator requires having babel-eslint installed',
    )
  }
}

if (hasPackage('@babel/plugin-proposal-nullish-coalescing-operator')) {
  config.parser = 'babel-eslint'
  if (!hasPackage('babel-eslint')) {
    throw Error(
      '@babel/plugin-proposal-nullish-coalescing-operator requires having babel-eslint installed',
    )
  }
}

if (hasPackage('@babel/plugin-proposal-optional-chaining')) {
  config.parser = 'babel-eslint'
  if (!hasPackage('babel-eslint')) {
    throw Error('@babel/plugin-proposal-optional-chaining requires having babel-eslint installed')
  }
}

if (hasPackage('@babel/plugin-proposal-pipeline-operator')) {
  config.parser = 'babel-eslint'
  if (!hasPackage('babel-eslint')) {
    throw Error('@babel/plugin-proposal-pipeline-operator requires having babel-eslint installed')
  }
}

if (hasPackage('flow-bin')) {
  config.parser = 'babel-eslint'
  if (!hasPackage('babel-eslint')) {
    throw Error('flow-bin requires having babel-eslint installed')
  }
}

console.log(config)

module.exports = config
