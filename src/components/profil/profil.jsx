import React, { useState } from "react";

const Profil = ({ user, chroniques }) => {

  const [chroniquesDisplay, setChroniquesDisplay] = useState("");

  return (
    <div className="profile-container">
      <div className="profile-row">
        <div>
          <img src="https://via.placeholder.com/150" alt="" />
          <h3>{user.username}</h3>
        </div>
        <div className="profil-all-poste">
          {chroniques.map((el) => (
            <div className="profile-poste" onClick={() => setChroniquesDisplay(el.contenu)}>
              <div className="poste-title">
                <img src="https://via.placeholder.com/50" alt="" />
                <h4>{el.titre}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        chroniquesDisplay !== "" && (
          <div className="posteContent">
            {chroniquesDisplay}
          </div>
        )
      }
    </div>
  );
};

export default Profil;
