
const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')

const showSurveys = function (response) {
  store.surveys = response.surveys
  const showSurveysHtml = showSurveysTemplate({ surveys: store.surveys })
  $('#dashboard').html(showSurveysHtml)
}

const addSurveySuccess = function () {

}

module.exports = {
  showSurveys,
  addSurveySuccess
}
