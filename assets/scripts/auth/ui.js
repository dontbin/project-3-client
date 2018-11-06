const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#display-message').html('').hide()
  $('#sign-up-form').trigger('reset')
  $('#display-message').text(`Success!`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
}

const signUpFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').html('That username is taken. Please try another').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#display-message').html('').hide()
  $('#sign-in-form').trigger('reset')
  $('#display-message').css('color', 'green')
  $('#display-message').text(`Welcome, ${store.user.email}`).fadeToggle().delay(1000).fadeToggle()
}

const signInFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').text('Something went wrong, please try again').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('').hide()
  $('#change-password-form').trigger('reset')
  $('#display-message').text(`Successfully changed password!`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
}

const changePasswordFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').text('Something went wrong, please try again').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
}

const signOutSuccess = function () {
  store.user = null
  $('#display-message').html('').hide()
  $('#sign-up-form, #sign-in-form, #change-password-form').trigger('reset')
  $('#display-message').text(`You have signed out`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
}

const signOutFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong')
  $('#display-message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
