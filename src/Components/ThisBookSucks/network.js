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

function getBooks(){
  return fetch('http://localhost:3001/api/v1/books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      //make sure to have headers!!!
    }
  })
}

function getList(){
  return fetch('http://localhost:3001/api/v1/getList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      //make sure to have headers!!!
    }
  })
}

function addToList(payload){
  return fetch('http://localhost:3001/api/v1/addToList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      //make sure to have headers!!!
    },
    body: JSON.stringify(payload)
  })
}

function removeFromList(id){
  return fetch('http://localhost:3001/api/v1/removeFromList?id=' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      //make sure to have headers!!!
    }
  })
}

function getBookReviews(id){
  return fetch('http://localhost:3001/api/v1/getReviews?id=' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    }
  })
}

function addYourReview(payload){
  return fetch('http://localhost:3001/api/v1/addReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    },
    body: JSON.stringify(payload)
  })
}


export {
  getUserInfo,
  getBooks,
  getList,
  addToList,
  removeFromList,
  getBookReviews,
  addYourReview
}
