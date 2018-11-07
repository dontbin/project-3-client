'use strict'

const switchToCreateSurvey = function (event) {
  event.preventDefault()
  $('#dashboard').addClass('hidden')
  $('#create-survey-form').removeClass('hidden')
}

const surveyCreated = function () {
  $('#add-survey-form').trigger('reset')
  $('#dashboard').removeClass('hidden')
  $('#create-survey-form').addClass('hidden')
}

module.exports = {
  switchToCreateSurvey,
  surveyCreated
}
