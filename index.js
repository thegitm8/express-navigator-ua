/**
 * express-navigator-ua
 *
 * Express middleware to polyfill navigator.userAgent serverside. This allows
 * packages which depend on navigator.userAgent to be rendered on the server.
 */

export default function navigatorUserAgent(req, res, next) {

	global.navigator = {

		userAgent: req.headers['user-agent']

	}

	next()

}