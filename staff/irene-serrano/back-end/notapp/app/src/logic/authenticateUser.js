import {validators} from 'commons'
const { validateEmail, validatePassword } = validators

function authenticateUser(email, password) {
  validateEmail(email) 
  validatePassword(password)
  
  return fetch("http://localhost:8080/api/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  }).then((res) => {
    const { status } = res;

    if (status === 200) {
      
     return res.json().then((payload) => payload);
    
    } else if (status >= 400 && status < 500) {
      throw new Error("client");
    } else if (status >= 500) throw new Error("server error");
  });
}

export default authenticateUser;
