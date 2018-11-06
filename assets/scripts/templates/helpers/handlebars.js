const register = function (Handlebars) {
  const helpers = {
    eachSorted: function (context, options) {
      let ret = ''
      Object.keys(context).sort().forEach(function (key) {
        ret = ret + options.fn({key: key, value: context[key]})
      })
      return ret
    }
  }
  return helpers
}

// Handlebars.registerHelper('eachSorted', function(context, options) {
//     var ret = "";
//     Object.keys(context).sort().forEach(function(key) {
//         ret = ret + options.fn({key: key, value: context[key]})
//     })
//     return ret
// })

module.exports.register = register
module.exports.helpers = register(null)
