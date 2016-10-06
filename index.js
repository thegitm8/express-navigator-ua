/**
 * express-navigator-ua
 *
 * Express middleware to polyfill navigator.userAgent serverside. This allows
 * packages which depend on navigator.userAgent to be rendered on the server.
 */


var middleware = require('./middleware')
var uaGlobal = require('./global')

module.exports = {
	middleware: middleware,
	global: uaGlobal
}