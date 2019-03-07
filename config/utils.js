const path = require('path')

module.exports = {
  setPath: _path => {
    return path.resolve(process.cwd(), _path)
  }
}