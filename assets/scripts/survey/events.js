const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const ui = require('./ui.js')
const store = require('../store.js')
const appUi = require('../ui.js')

// Getting ID will depend on how surveys are displayed in UI
// const onRemoveSurvey = function (event) {
//   event.preventDefault()
//   api.removeSurvey(surveyId)
//     .then(console.log)
//     .catch(console.error)
// }

const onUpdateSurvey = function (event) {
  let survey
  for (let i = 0; i < store.surveys.length; i++) {
    if (store.surveys[i]._id === $(event.target).closest('section').data('id')) {
      survey = store.surveys[i]
    }
  }
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  const id = survey._id
  console.log(id)
  api.editSurvey(surveyData, id)
    .then(onShowResponses)
    .catch(console.error)
}

const onShowResponses = function (survey) {
  const responses = survey.survey.responses
  let result = 0
  responses.forEach((response) => {
    result += response.answer
  })
  const average = result / responses.length
  $(`#questionaire-${survey.survey._id}`).addClass('hidden')
  $(`#responses-${survey.survey._id}`).removeClass('hidden')
  $(`#responses-${survey.survey._id}`).html('average result is: ' + average)
}

const onShowSurveys = function (event) {
  event.preventDefault()
  api.showSurveys()
    .then(ui.showSurveys)
    .catch(console.error)
}

const onAddSurvey = function (event) {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  const admin = store.user.email
  api.addSurvey(surveyData, admin)
    .then(() => onShowSurveys(event))
    .then(appUi.surveyCreated)
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

const addHandlers = () => {
  $('#dashboard').on('submit', '.fisto5', onUpdateSurvey)
}

module.exports = {
  onUpdateSurvey,
  onAddSurvey,
  onShowSurveys,
  showResults,
  addHandlers
}
