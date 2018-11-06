'use strict'
const auth = require('./auth/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', auth.onSignUp)
  $('#sign-in-form').on('submit', auth.onSignIn)
  $('#change-password-form').on('submit', auth.onChangePassword)
  $('#sign-out-button').on('click', auth.onSignOut)
})
