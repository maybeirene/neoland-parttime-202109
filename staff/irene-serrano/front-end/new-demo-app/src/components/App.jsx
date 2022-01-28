import { useState, useEffect } from "react";
import  Nav  from "./Nav";
import  Register  from "./Register";
import  Login  from "./Login";
import  Forecast  from "./Forecast";
import  Search  from "./Search";
import  Land  from "./Land";
import  Favorites  from "./Favorites";
import  Cart  from "./Cart";

import  logger  from "../logger";

import  retrieveUser  from '../logic/retrieve-user.js';

function App() {
  const [view, setView] = useState(sessionStorage.token ? "home" : "land");
  const [token, setToken] = useState(
    sessionStorage.token ? sessionStorage.token : null
  );
  const [city, setCity] = useState(null);
  const [username, setUsername] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const goBack = () => setView(sessionStorage.token ? "home" : "land");

  const goLogin = () => {
    setView("login");
  };
  const goHome = () => {
    setView("home");
  };
  const goFavorites = () => {
    console.log("going to favs");
    setView("favs");
  };
  const goRegister = () => {
    setView("register");
  };

  const logout = () => {
    delete sessionStorage.token;
    setView("land");
    setCity(null);
    setToken(null);
  };
  const showCart = () => {
    setView("cart");
  };

  const setRegister = (_token, _username, _city) => {
    setView("home");
    setToken(_token);
    setUsername(_username);
    setCity(_city);
  };

  const setLogin = (_token, _username, _city) => {
    setView("home");
    setToken(_token);
    setUsername(_username);
    setCity(_city);
  };

  useEffect(() => {
    //logger.debug("APP => componentDidMount " + view);
    if (token)
      try {
        retrieveUser(token, (error, user) => {
          if (error) {
            setFeedback(error.message);

            delete sessionStorage.token;
            logout();
            return;
          }

          const { username, city } = user;
          setUsername(username);
          setCity(city ? city : "this user has no city assigned");
        });
      } catch (error) {
        delete sessionStorage.token;
        setFeedback(error.message);
      }
  });

  return (
    <div>
      <Nav
        loged={city ? true : false}
        handleBack={goBack}
        onClickLogin={goLogin}
        onLogOut={logout}
        showCart={showCart}
        goHome={goHome}
        goFavorites={goFavorites}
        username={username}
      />

      {view === "land" ? (
        <Land onClickLogin={goLogin} onClickRegister={goRegister} />
      ) : view === "register" ? (
        <Register onClickLogin={goLogin} onRegistered={setRegister} />
      ) : view === "login" ? (
        <Login onClickRegister={goRegister} onLoggedIn={setLogin} />
      ) : view === "home" ? (
        <div className="home-container">
          <Search token={token} />
          <Forecast city={city} />
        </div>
      ) : view === "favs" ? (
        <Favorites />
      ) : view === "cart" ? (
        <Cart />
      ) : (
        <h3>Something went wrong</h3>
      )}
    </div>
  );
}

export default App;
