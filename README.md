# express-input-reduce
Using https://www.npmjs.com/package/object-reduce-by-map strip input to only the items you want.
This allow you to safely use the contents of body and query directly.

[![Build Status](https://travis-ci.org/johndcarmichael/express-input-reduce.svg?branch=master)](https://travis-ci.org/johndcarmichael/express-input-reduce) | [![Dependencies](https://david-dm.org/johndcarmichael/express-input-reduce.svg)](https://david-dm.org/johndcarmichael/express-input-reduce) | [![License](http://img.shields.io/npm/l/express-input-reduce.svg)](https://github.com/johndcarmichael/express-input-reduce/blob/master/LICENSE)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Example

Below is an example route, wherein the input body is reduced via a simple map. The result is the provided controller can rely (in this exmaple) on the body only containing the map's structure.

As such, you can be assured that for example, the user's email in this case is not being passed in. This then allows the developer to pass the body object directly to a nosql query without worrying that unwanted attributes will be affected.

Of course, a real world example would likely want to validate the req object 1st too.

```js
import Router from 'express-promise-router'
import userController from '../controllers/UserController'

import expressInputReduce from '../middleware/express-input-reduce'
const userMaps = {
    v1UserPut: {
      body: {
        firstName: String,
        lastName: String,
        birthday: String,
        measurements: {
          heightCM: Number,
          wasteCM: Number,
          shoeSizeEU: Number,
        },
      },
    },
}

export default function() {
  const router = Router()

  router.put('/',
    expressInputReduce(userMaps.v1UserPut), 
    userController.v1UserPut
  )

  return router
}

```

