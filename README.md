# express-navigator-ua
This package provides two ways to provide the userAgent during serverside rendering. This is nescessary if you use packages like `material-ui` which depend on the existence of navigator.userAgent (provided by window.navigator.userAgent in the browser) while rendering.

You do not need this package if you just want to polyfill navigator.userAgent with no specific userAgent. Just put
```javascript
global.navigator = { userAgent: 'all' }
```
in your main server file and you are done (this is what express-navigator-ua/global does).


### Install

`npm install express-navigator-ua --save`


### Usage

express-navigator-ua/global (recommended)
```javascript
// in the main server file
import nuaGlobal from 'express-navigator-ua/global'

nuaGlobal()
```

express-navigator-ua/middleware (not recommended, see below):
```javascript
import express from 'express'
import nuaMiddleware from 'express-navigator-ua/middleware'

const app = express()

app.use(nuaMiddleware)
```
This middleware is not suited for production use. The reassignment of a global variable on a request base (as done in this middleware) could [lead to unexpected behaviour](https://github.com/callemall/material-ui/pull/2172#issuecomment-157463582).

### Best (better) practice
The userAgent in express resides in req.headers['userAgent']. Provide the userAgent directly in the rendering process, like this:

```javascript
import React from 'react'
import { renderToString } from 'react-dom/server'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

[...]

function thisIsYourRenderingFunction(req, res, next) {

	const components = renderToString(
		<MuiThemeProvider muiTheme={
			// this is where the magic happens
			getMuiTheme({ userAgent: req.headers['userAgent'] })
		}>
			[...otherStuffToRender]
		</MuiThemeProvider>
	)

	res.send(component)

}
```