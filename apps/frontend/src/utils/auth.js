// src/utils/auth.js

export function isLoggedIn() {
  // For now, we check if fake user exists in localStorage
  return !!localStorage.getItem('studybuddy_user')
}

export function getUser() {
  const data = localStorage.getItem('studybuddy_user')
  return data ? JSON.parse(data) : null
}
