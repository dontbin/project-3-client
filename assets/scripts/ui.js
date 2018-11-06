'use strict'

const switchToCreateSurvey = function (event) {
  event.preventDefault()
  console.log(event)
  $('#dashboard').addClass('hidden')
  $('#create-survey-form').removeClass('hidden')
}


module.exports = {
  switchToCreateSurvey
}
