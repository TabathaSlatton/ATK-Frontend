class User {
    constructor(id, first_name, last_name, username, email){
      this.first_name = first_name,
      this.last_name = last_name,
      this.username = username,
      this.email = email,
      this.id = id
    }
}
//login information
function loginFormHandler(e) {
    e.preventDefault()
    const emailInput = e.target.querySelector('#login-email').value
    const pwInput = e.target.querySelector('#login-password').value
    loginFetch(emailInput, pwInput)
  }
  function loginFetch(email, password){
      const bodyData = {user: {
            email,
            password
          }
      }
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyData)
      })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('jwt_token', json.jwt)
        renderUserProfile()
      })
    }
  
    function renderUserProfile() {
      console.log(localStorage.getItem('jwt_token'));
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
        }
      })
      .then(response => response.json())
      .then(json => {
          let u = new User(json.user.id, json.user.first_name, json.user.last_name, json.user.username, json.user.email)
        console.log(`Welcome back ${json.user.first_name}`, u)
            // we will use u to render user information u.whatever_the_method_is
      })
    }







