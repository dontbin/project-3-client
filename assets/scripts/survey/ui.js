
const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')

const showSurveys = function (response) {
  console.log(response)
  store.surveys = response.surveys
  const showSurveysHtml = showSurveysTemplate({ surveys: response.surveys })
  $('#dashboard').html(showSurveysHtml)
}

module.exports = {
  showSurveys
}
