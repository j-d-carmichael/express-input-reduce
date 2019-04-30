const middleware = require('../src/middleware')
const req = {
  body: {
    name: 'abc',
    opts: {
      speed: 12,
      email: false
    },
  },
  query: {
    count: 10,
    limit: 'abc'
  }
}
const map = {
  body: {
    name: String,
    age: Number,
    opts: {
      speed: Number,
      email: String
    },
  },
  query: {
    count: Number,
    limit: Number,
  },
}

it('Sanitize body content', () => {
  middleware(map, {keepKeys: true})(req, {}, function (req, res, next) {})

  expect(req.body).toEqual({
    name: 'abc',
    age: null,
    opts: {
      speed: 12,
      email: null
    },
  })
})
