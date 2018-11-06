const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// Getting ID will depend on how surveys are displayed in UI
const onRemoveSurvey = function (event) {
  event.preventDefault()
  api.removeSurvey(surveyId)
    .then(console.log)
    .catch(console.error)
}

const onUpdateSurvey = function (event) {
  const surveyData = getFormFields(event.target)
  api.editSurvey(surveyData)
    .then(console.log)
    .catch(console.error)
}

const onShowSurveys = function (event) {
  api.showSurveys()
    .then(console.log)
    .catch(console.error)
}

const onAddSurvey = function (event) {
  const surveyData = getFormFields(event.target)
  api.addSurvey(surveyData)
    .then(console.log)
    .catch(console.error)
}

module.exports = {
  onRemoveSurvey,
  onUpdateSurvey,
  onAddSurvey,
  onShowSurveys
}
