const objectReduceByMap = require('object-reduce-by-map')
/**
 * Reduces the input body & query to a provided map with body and query keys respectively
 * @param {object} map An object mapped allowed data in body and query
 * @param options Object of options passed directly to object-reduce-by-map
 * @returns {Function}
 */
module.exports = (map, options) => {
  options = options || {}
  return (req, res, next) => {
    if (map.body) objectReduceByMap(req.body, map.body, options)
    else req.body = {}
    if (map.query) objectReduceByMap(req.query, map.query, options)
    else req.query = {}
    next()
  }
}
