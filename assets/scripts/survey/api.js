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
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'survey': {
        'title': surveyData.title,
        'question': surveyData.duration,
        'admin': store.user.email
      }
    }
  })
}

const addSurvey = function (surveyData) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'survey': surveyData
    }
  })
}

module.exports = {
  showSurveys,
  removeSurvey,
  addSurvey,
  editSurvey
}
