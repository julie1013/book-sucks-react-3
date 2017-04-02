function getUserInfo(){
  return fetch('http://localhost:3001/api/v1/userinfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      //make sure to have headers!!!
    }
  })
}

export {
  getUserInfo
}
