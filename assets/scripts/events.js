'use strict'

const ui = require('./ui')


const onCreateSurvey = function (event) {
  event.preventDefault()
  console.log('event')
}


module.exports = {
  onCreateSurvey
}
