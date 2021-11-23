var username = "pepinillo";
var password = "pepinillo";

var userToken;
var userObj;

var game = document.querySelector(".game");

var userProfileBtn = document.querySelector('#user-profile-btn')
var profilePanel = document.querySelector(".profile");
var profileUser = document.querySelector(".profile-user");
var profilePassword = document.querySelector(".profile-item-password");

var newPassword = document.querySelector(".profile-new-username").value;
var newUsername = document.querySelector(".profile-new-password").value;

var newUserCredentials




userProfileBtn.addEventListener('click', toggleUserPanel)

function toggleUserPanel (){
  var panelClasses = profilePanel.classList
  var panelClassesArr = []
  
  for(var i = 0; i < panelClasses.length; i++){
    panelClassesArr[i] = panelClasses[i] 
  }
    if(panelClassesArr.includes('off') ){
      profilePanel.classList.remove('off')
      game.classList.add('off')
      userProfileBtn.innerText = '❌ Close'
    }else{
      profilePanel.classList.add('off')
      game.classList.remove('off')
      userProfileBtn.innerText = username
    }

}




var profileSubmitBtn = document.querySelector(".profile-btn");

authenticateUser(username, password, function (error, token) {
  if (error) {
  } else {
    userToken = token;
    retrieveUser(token, function (error, user) {
      if (error) {
      } else {
        userObj = user;
        saveUser(user, token);

       
        profileUser.innerText = userObj.username + "✏️";
      }
    });
  }
});




profileSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(newUsername)
  newUsername === "" ? userObj.username : newUsername
  newPassword === "" ? userObj.password : newPassword
  //console.log(newUsername)

  newUserCredentials = {
    username : newUsername,
    password : newPassword
    
  };

  modifyUser(userToken, newUserCredentials, function (error, data) {
    if (error) {
      console.log(userToken, newUserCredentials)
      console.error(error);
    } else {
      console.log(newUserCredentials);
      console.log(data);

    }
  });
}); 





function saveUser(user, token) {
  //console.log(user,token)

  /* profileSubmitBtn.onsubmit = function (event) {
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
  }; */

  /* 
  */
}
