const generate = require('nanoid/generate')

const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

const createId = (length = 20) => generate(alphabet, length)

module.exports = createId
