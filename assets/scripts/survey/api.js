const config = require('../config.js')
const store = require('../store.js')

const showSurveys = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const removeSurvey = function (surveyId) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + surveyId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const editSurvey = function (surveyData, id) {
  console.log(surveyData)
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'survey': {
        'title': surveyData.title,
        'question': surveyData.question,
        'admin': store.user.email,
        'responses': {
          'answer': surveyData.question
        }
      }
    }
  })
}

const addSurvey = function (surveyData, admin) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'survey': {
        'title': surveyData.title,
        'question': surveyData.question,
        'admin': admin
      }
    }
  })
}

module.exports = {
  showSurveys,
  removeSurvey,
  addSurvey,
  editSurvey
}
