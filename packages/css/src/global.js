// @flow

// Using "globalStyles" to not interfere with "global"

const globalStyles = ({ palette }: { palette: Object }) => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
      height: '100%',
      background: '#f2f2f2',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    body: { height: '100%', margin: 0 },
    '*, *:before, *:after': { boxSizing: 'inherit' },
    '#app': { height: '100%', display: 'flex', flexDirection: 'column' },
    a: { color: palette.primary.main, textDecoration: 'none' },
  },
})

export default globalStyles
