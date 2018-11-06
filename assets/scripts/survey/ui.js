const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')

const showSurveys = function (response) {
  store.surveys = response.surveys
  const showSurveysHtml = showSurveysTemplate({ surveys: response.surveys })
  $('.survey_display').html(showSurveysHtml)
}

module.exports = {
  showSurveys
}
