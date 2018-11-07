'use strict'

const switchToCreateSurvey = function (event) {
  event.preventDefault()
  $('#dashboard').addClass('hidden')
  $('#create-survey-form').removeClass('hidden')
}

const surveyCreated = function () {
  $('#dashboard').removeClass('hidden')
  $('#create-survey-form').addClass('hidden')
  $('#create-survey-form').trigger('reset')
}

module.exports = {
  switchToCreateSurvey,
  surveyCreated
}
