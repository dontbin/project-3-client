const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const surveyApi = require('../survey/api.js')
const surveyUi = require('../survey/ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  $(event.target).collapse('toggle')
  const credentials = getFormFields(event.target)
  api.signUp(credentials)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  $(event.target).collapse('toggle')
  const credentials = getFormFields(event.target)
  api.signIn(credentials)
    .then(ui.signInSuccess)

    .then(surveyApi.showSurveys)
    .then(surveyUi.showSurveys)

    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  $(event.target).collapse('toggle')
  const credentials = getFormFields(event.target)
  api.changePassword(credentials)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
