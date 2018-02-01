
function mirror(key, src, dest) {
  var val = src[key]
  if (typeof val == 'function') {
    dest[key] = val.bind(src)
  } else {
    Object.defineProperty(dest, key, {
      configurable: true,
      enumerable: true,
      get: function() {
        return src[key]
      },
      set: function(val) {
        src[key] = val
      }
    })
  }
  return dest
}

module.exports = mirror

