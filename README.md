# Scope Types

Helper function for scoping a list of action types.

[![Build Status](https://travis-ci.org/rongierlach/scope-types.svg?branch=master)](https://travis-ci.org/rongierlach/scope-types) [![Dependency Status](https://david-dm.org/rongierlach/scope-types.svg)](https://david-dm.org/rongierlach/scope-types) [![devDependency Status](https://david-dm.org/rongierlach/scope-types/dev-status.svg)](https://david-dm.org/rongierlach/scope-types#info=devDependencies) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  

## Installation
Using npm:  
`$ npm install scope-types`  

Using yarn:  
`$ yarn add scope-types`

## Usage
```javaScript
/* actionTypes.js */
import scopeTypes from 'scope-types'

const types = ['MY_WILD_TYPE', 'MY_SWELL_TYPE', 'MY_SLICK_TYPE']
const customScope = 'myThrillingScope'
const actionTypes = scopeTypes(types, customScope)

/*
actionTypes = {
  MY_WILD_TYPE: Symbol('myThrillingScope/MY_WILD_TYPE'),
  MY_SWELL_TYPE: Symbol('myThrillingScope/MY_SWELL_TYPE')
  MY_SLICK_TYPE: Symbol('myThrillingScope/MY_SLICK_TYPE')
}
*/

export default actionTypes
```

## Usage With Redux Logger
If you are planning on using with [Redux Logger](https://github.com/evgenyrodionov/redux-logger) be sure to look at this [issue](https://github.com/evgenyrodionov/redux-logger/pull/106).
