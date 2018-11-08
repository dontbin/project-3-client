'use strict'

const switchToCreateSurvey = function (event) {
  event.preventDefault()
  $('#dashboard, #dashboard-btn').addClass('hidden')
  $('#create-survey-form, #view-surveys-btn').removeClass('hidden')
}

const surveyCreated = function () {
  $('#add-survey-form').trigger('reset')
  $('#dashboard, #dashboard-btn').removeClass('hidden')
  $('#create-survey-form, #view-surveys-btn').addClass('hidden')
}

const viewAllSurveys = function () {
  $('#add-survey-form').trigger('reset')
  $('#dashboard, #dashboard-btn').removeClass('hidden')
  $('#create-survey-form, #view-surveys-btn').addClass('hidden')
}

module.exports = {
  switchToCreateSurvey,
  surveyCreated,
  viewAllSurveys
}
