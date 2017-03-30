function logIn(formPayload){
  return fetch('http://localhost:3001/api/v1/knock/auth_token', {
    method: 'POST',
    body: JSON.stringify({
      'auth': {
        'email': formPayload.email,
        'password': formPayload.password
      }
    }),
    headers: {
      'Content-Type': 'application/json'
      //make sure to have headers!!!
    }
  })
}

export {
  logIn
}
