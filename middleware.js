
/**
 * express middleware to add a 
 * @param  {[object]}   req  the request object
 * @param  {[object]}   res  the response object
 * @param  {Function} 	next
 */
function navigatorUserAgent(req, res, next) {

	if(process.env.NODE_ENV === 'development') {

		console.warn('Using express-navigator-ua middleware is an unsafe way of providing navigator.userAgent object. See https://github.com/thegitm8/express-navigator-ua')

	}

	global.navigator = {

		userAgent: req.headers['user-agent']

	}

	next()

}

module.exports = navigatorUserAgent
