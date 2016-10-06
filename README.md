# express-navigator-ua
Express middleware to add global navigator.userAgent object to requests for serverside rendering.

### Important!
This middleware is not suited for production use. The reassignment of a global variable on a request base (as done in this middleware) could [lead to unexpected behaviour](https://github.com/callemall/material-ui/pull/2172#issuecomment-157463582).


### Install

`npm install express-navigator-ua`


### Usage

ES6
```
import express from 'express'
import navigatorUa from 'express-navigator-ua'

const app = express()

app.use(navigatorUa)
```

ES5/2015
```
var app = require('express')()
var navigatorUa = require('express-navigator-ua')

app.use(navigatorUa)

```
