const middleware = require('../src/middleware')
const req = {
  body: {
    name: 'abc',
    email: 'john@john.com',
    password: 'abc123',
    age: 21,
    opts: {
      speed: 12,
      email: false
    },
    prefs: {
      something: 'cool',
      otherthing: {
        bigger: {
          type: 'Object'
        }
      }
    },
    tickets: [1, 2, 3]
  },
  query: {
    count: 10,
    depth: 5,
    q: 'abc'
  },
  some: {
    random: 'string',
  },
  url: 'some urls'
}
const map = {
  body: {
    name: String,
    age: Number,
    opts: {
      speed: Number,
      email: Boolean
    },
    prefs: Object,
    tickets: Array
  },
  query: {
    count: Number,
  },
}
let reqClone = Object.assign({}, req)


it('Sanitize body content', () => {
  middleware(map)(req, {}, function (req, res, next) {})

  expect(req.body).toEqual({
    name: 'abc',
    age: 21,
    opts: {
      speed: 12,
      email: false
    },
    prefs: {
      something: 'cool',
      otherthing: {
        bigger: {
          type: 'Object'
        }
      }
    },
    tickets: [1, 2, 3]
  })
})

it('Sanitize query content', () => {
  expect(req.query).toEqual({
    count: 10
  })
})

it('Expect rest of req object to be the same', () => {
  reqClone.body = req.body
  reqClone.query = req.query
  expect(reqClone).toEqual(req)
})
