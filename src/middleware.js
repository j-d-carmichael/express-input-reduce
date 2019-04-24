const objectReduceByMap = require('object-reduce-by-map')
module.exports = (map) => {
  return (req, res, next) => {
    if (map.body) objectReduceByMap(req.body, map.body)
    else req.body = {}
    if (map.query) objectReduceByMap(req.query, map.query)
    else req.query = {}
    next()
  }
}
