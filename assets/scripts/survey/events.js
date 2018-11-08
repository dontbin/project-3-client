const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const ui = require('./ui.js')
const store = require('../store.js')
const appUi = require('../ui.js')
const ownerSurveysTemplate = require('../templates/owner-surveys.handlebars')
const Chart = require('chart.js')
// let answer

const onUpdateSurvey = function (event) {
  let survey
  for (let i = 0; i < store.surveys.length; i++) {
    if (store.surveys[i]._id === $(event.target).closest('section').data('id')) {
      survey = store.surveys[i]
    }
  }
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  // answer = surveyData.question
  const id = survey._id
  api.editSurvey(surveyData, id)
    .then(onShowResponses)
    .then(survey.responses.push({'answer': parseInt(surveyData.question, 10)}))
    .catch(console.error)
}

const onShowResponses = function (survey) {
  const responses = survey.survey.responses
  let result = 0

  let zero = 0
  let one = 0
  let two = 0
  let three = 0
  let four = 0
  let five = 0
  responses.forEach((response) => {
    result += response.answer
    switch (response.answer) {
      case 0:
        zero += 1
        break
      case 1:
        one += 1
        break
      case 2:
        two += 1
        break
      case 3:
        three += 1
        break
      case 4:
        four += 1
        break
      case 5:
        five += 1
        break
    }
  })
  const barData = [zero, one, two, three, four, five]
  const average = Math.round(100 * (result / responses.length)) / 100
  $(`#questionaire-${survey.survey._id}, #submit-${survey.survey._id}`).addClass('hidden')
  $(`#responses-${survey.survey._id}`).removeClass('hidden')
  $(`#responses-${survey.survey._id}`).html('average result is: ' + average)
  const ctx = $(`#myChart-${survey.survey._id}`)
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0', '1', '2', '3', '4', '5'],
      datasets: [{
        label: 'Fist to five',
        data: barData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

const onShowSurveys = function (event) {
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

const showResults = function (survey) {
  event.preventDefault()
  store.surveys.forEach((survey) => {
    const total = survey.responses.reduce((acc, answer) => {
      acc += answer
    })
    const average = total / survey.responses.length
    $('#survey-response-display').append(`<h3>${survey.title}: ${average} </h3>`)
  })
}

const showOwnerSurveys = function () {
  // api.showSurveys()
  // ui.showSurveys()
  const ownerSurveys = []
  store.surveys.forEach(survey => {
    if (survey.owner === store.user._id) {
      ownerSurveys.push(survey)
    }
  })
  if (ownerSurveys.length === 0) {
    $('#owner-surveys-display').html('You own zero surveys. Click below to create one!')
  } else {
    const ownerSurveysHtml = ownerSurveysTemplate({ surveys: ownerSurveys })
    $('#owner-surveys-display').html(ownerSurveysHtml)
    // loop through owner surveys
    ownerSurveys.forEach((survey) => {
      let result = 0
      let zero = 0
      let one = 0
      let two = 0
      let three = 0
      let four = 0
      let five = 0
      survey.responses.forEach((response) => {
        result += response.answer
        switch (response.answer) {
          case 0:
            zero += 1
            break
          case 1:
            one += 1
            break
          case 2:
            two += 1
            break
          case 3:
            three += 1
            break
          case 4:
            four += 1
            break
          case 5:
            five += 1
            break
        }
      })
      const barData = [zero, one, two, three, four, five]
      const average = Math.round(100 * (result / survey.responses.length)) / 100
      if (survey.responses.length === 0) {
        $(`#results-${survey._id}`).html('No one has taken your survey yet!')
      } else {
        $(`#results-${survey._id}`).html('Average result is: ' + average)
        const ctx = $(`#myChart-${survey._id}`)
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['0', '1', '2', '3', '4', '5'],
            datasets: [{
              label: 'Fist to five',
              data: barData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              hoverBorderWidth: 3,
              hoverBorderColor: '#000'
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })
      }
    })
  }
}

const onDeleteSurvey = function (event) {
  event.preventDefault()
  const surveyId = $(event.target).closest('section').data('id')
  api.removeSurvey(surveyId)
    .then(api.showSurveys)
    .then(ui.showSurveys)
    .then(showOwnerSurveys)
    .catch()
}

const addHandlers = () => {
  $('#dashboard').on('submit', '.fisto5', onUpdateSurvey)
  $('#delete-surveys-btn').on('click', showOwnerSurveys)
  $('#owner-surveys-display').on('click', '.remove_button', onDeleteSurvey)
}

module.exports = {
  onUpdateSurvey,
  onAddSurvey,
  onShowSurveys,
  showResults,
  addHandlers,
  showOwnerSurveys,
  onDeleteSurvey
}
