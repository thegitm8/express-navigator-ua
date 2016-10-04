# express-navigator-ua

Adds the navigator.userAgent object to every request which some packages (Material-UI, React Boxes, etc.) need for server side rendering (SSR).

## Install

`npm install express-navigator-ua`


## Usage

```
#ES6
import express from 'express'
import navigatorUa from 'express-navigator-ua'

const app = express()

app.use(navigatorUa)



#ES5
var app = require('express')()
var navigatorUa = require('express-navigator-ua')

app.use(navigatorUa)

```
