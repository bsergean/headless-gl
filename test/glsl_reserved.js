require('./util/conformance')(function(str) {
  return str.indexOf('glsl_reserved') === 0
})
