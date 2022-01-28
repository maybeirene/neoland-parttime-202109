import { useState, useEffect } from 'react';
import retrieveUser from '../logic/retrieve-user';
import retrieveVehicle from '../logic/retrieve-vehicle';

function Favorites (){
  const [favVehicles, setFavVehicles] = useState([])
  const [userFavs,setUserFavs] = useState(null)

  const getFavs = ()=>{
    retrieveUser(sessionStorage.token, (error, user) => {
      if (error) console.log(error.message);
      else {
        let userFavs = user.favs;
        let favVehicles = [];
        setUserFavs(userFavs)
      
        

        if (userFavs) {
          userFavs.map((id) => {
            retrieveVehicle(sessionStorage.token, id, (error, vehicle) => {
              if (error) console.log(error.message);
              else {
                favVehicles.push(vehicle);

                setFavVehicles( favVehicles );
              }
            });
          });
        }
      }
    });
  }


  useEffect(()=>{
    getFavs()
  })

    return (
      <div className="favs-container panel favs-panel">
        <h2>Your favorites</h2>

        {userFavs ? (
          <ul className="favs-list-container">
            {favVehicles.map((vehicle) => {
              return (
                <li className="favs-list-item" key={vehicle.id}>
                  <img className="favs-list-item-img" src={vehicle.image}></img>
                  <p className="favs-list-item-name">{vehicle.name}</p>
                  <p className="favs-list-item-price">{vehicle.price}$</p>
                  <span
                    onClick={() =>
                      alert("TODO => onclick to delte fav vehicle")
                    }
                    className="favs-list-item-delete selectable"
                  >
                    🗑️
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className="error">You don't have favorites yet. Go explore!</h3>
        )}
      </div>
    );
}

export default Favorites