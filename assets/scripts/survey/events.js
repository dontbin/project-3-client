const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// Getting ID will depend on how surveys are displayed in UI
const onRemoveSurvey = function (event) {
  event.preventDefault()
  api.removeSurvey(surveyId)
    .then(console.log)
    .catch(console.error)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.editSurvey(surveyData)
    .then(console.log)
    .catch(console.error)
}

const onShowSurveys = function (event) {
  event.preventDefault()
  api.showSurveys()
    .then(console.log)
    .catch(console.error)
}

const onAddSurvey = function (event) {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  const admin = store.user.email
  api.addSurvey(surveyData, admin)
    .then(console.log)
    .catch(console.error)
}

const showResults = function () {
  event.preventDefault()
  store.surveys.forEach((survey) => {
    const total = survey.responses.reduce((acc, answer) => {
      acc += answer
    })
    const average = total / survey.responses.length
    $('#survey-response-display').append(`<h3>${survey.title}: ${average} </h3>`)
  })
}

module.exports = {
  onRemoveSurvey,
  onUpdateSurvey,
  onAddSurvey,
  onShowSurveys,
  showResults
}
