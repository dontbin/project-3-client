const config = require('../config.js')
const store = require('../store.js')

const showResponses = function () {
  return $.ajax({
    url: config.apiUrl + '/responses',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const removeResponse = function (responseId) {
  return $.ajax({
    url: config.apiUrl + '/responses/' + responseId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const editResponse = function (responseData, id) {
  return $.ajax({
    url: config.apiUrl + '/responses/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'response': {
        'question': responseData.question
      }
    }
  })
}

const addResponse = function (responseData) {
  return $.ajax({
    url: config.apiUrl + '/responses',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'response': responseData
    }
  })
}

module.exports = {
  showResponses,
  removeResponse,
  addResponse,
  editResponse
}
