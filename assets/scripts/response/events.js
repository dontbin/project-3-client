const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// Getting ID will depend on how responses are displayed in UI
const onRemoveResponse = function (event) {
  event.preventDefault()
  api.removeResponse(responseId)
    .then(console.log)
    .catch(console.error)
}

const onUpdateResponse = function (event) {
  const responseData = getFormFields(event.target)
  api.editResponse(responseData)
    .then(console.log)
    .catch(console.error)
}

const onShowResponses = function (event) {
  api.showResponses()
    .then(console.log)
    .catch(console.error)
}

const onAddResponse = function (event) {
  const responseData = getFormFields(event.target)
  api.addResponse(responseData)
    .then(console.log)
    .catch(console.error)
}

module.exports = {
  onRemoveResponse,
  onUpdateResponse,
  onAddResponse,
  onShowResponses
}
