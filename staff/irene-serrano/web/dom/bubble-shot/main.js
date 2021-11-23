// save elements in variables
//sections:
var header = document.querySelector("header");
var headerUsername = header.querySelector(".username");

var signin = document.querySelector(".signin");
var signinForm = document.querySelector("form");
var signinBtn = signin.querySelector(".button");
var signinFeedback = signin.querySelector(".signin_Feedback");
var signinSignupLink = signin.querySelector(".signin_signup-text-link");

var signup = document.querySelector(".signup");
var signupSigninLink = signup.querySelector(".signup_signin-text-link");
var signupBtn = signup.querySelector(".button");
var signupForm = signup.querySelector("form");
var signupFeedback = signup.querySelector(".signup_Feedback");

var postSignup = document.querySelector(".post-signup");
var postSignupUsername = postSignup.querySelector(".post-signup-username");
var postSignupBtn = postSignup.querySelector(".button");

var game = document.querySelector(".game");

//add event listeners to buttons

signinBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var usernameInput = signinForm.username;
  var passwordInput = signinForm.password;

  var username = usernameInput.value;
  var password = passwordInput.value;
  var userToken;

  authenticateUser(username, password, function (error, token) {
    if (error) {
      signinFeedback.classList.remove("off");

      if (!username.trim() || !password.trim()) {
        signinFeedback.innerText = "Username or password is empty";
      } else if (password.trim().length < 8) {
        signinFeedback.innerText =
          "Password length is smaller than 8 characters";
      }
    } else {
      
      userToken = token
      retrieveUser(token, function (error, user) {
        if (error) {
          signinFeedback.classList.remove("off");
        } else {
          signin.classList.add("off");
          postSignup.classList.remove("off");
          postSignupUsername.innerText = username;
          headerUsername.innerText = username;
        }
      });
    }
  });

});

signinSignupLink.addEventListener("click", function (e) {
  e.preventDefault();

  signin.classList.add("off");
  signup.classList.remove("off");
});

signupBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var usernameInput = signupForm.username;
  var emailInput = signupForm.email;
  var passwordInput = signupForm.password;

  var username = usernameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;

try{
  registerUser(username, email, password, function (error){

    if(error) {
      signupFeedback.classList.remove('off')
      if(email.trim() === "" || username.trim() === ""){
        signupFeedback.innerText = "Invalid email or username. You must write something!";

      } else if (password.trim().length < 8){
        signupFeedback.innerText = "Password length is smaller than 8 characters";
      }
    } else{
      authenticateUser(username, password, function(error, token){
        if(error) {
          console.error(error)
        }else{
          retrieveUser(token, function (error, user){
            if(error){
              signupFeedback.classList.remove('off')
            } else {
              signup.classList.add("off");
                postSignup.classList.remove("off");
                postSignupUsername.innerText = username;
                headerUsername.innerText = username;
            }
          })
        }
      })
    }

  })
}catch (error){
  signupFeedback.innerText = error
}






  signup.classList.add("off");
  postSignup.classList.remove("off");
});

signupSigninLink.addEventListener("click", function (e) {
  e.preventDefault();

  signup.classList.add("off");
  signin.classList.remove("off");
});

postSignupBtn.addEventListener("click", function (e) {
  e.preventDefault();

  postSignup.classList.add("off");
  game.classList.remove("off");
});

var profilePanel = document.querySelector('.profile')
var profileform = profilePanel.querySelector('form')



function createProfileformItem () {
  retrieveUser(token, function (error, username) {
    if (error) {
      signupFeedback.classList.remove("off");
    } else {

      console.log(username)
      signup.classList.add("off");
      postSignup.classList.remove("off");
      postSignupUsername.innerText = username;
      headerUsername.innerText = username;
    }
  });

}


/* =====  PROFILE  ===== */


var profileUser = document.querySelector(".profile-user");
var profilePassword = document.querySelector(".profile-item-password");

var newPassword = document.querySelector(".profile-new-username").value;
var newUsername = document.querySelector(".profile-new-password").value;

var newUserCredentials 

var profileSubmitbtn = document.querySelector(".profile-btn");

/* authenticateUser(username, password, function (error, token) {
  if (error) {
  } else {
   

    retrieveUser(token, function (error, user) {
      if (error) {
      } else {
        userObj = user;
        saveUser(user, token);
      }
    });
  }
}); */

function saveUser(user, token) {
  profileUser.innerText = user.username + "✏️";
  console.log(newUserCredentials);

  profileSubmitbtn.onsubmit = function (event) {
  event.preventDefault();
    

    newUserCredentials = {
      username: newUsername === "" ? user.username : newUsername,
      password: newPassword === "" ? user.password : newPassword,
    };

    modifyUser(token, newUserCredentials, function () {
      if (error) {
        console.error(error);
      } else {
        console.log(newUserCredentials);
      }
    });
  };
}