var opn = require('opn')
var packageConfig = require('../package.json')
opn(packageConfig.url)
