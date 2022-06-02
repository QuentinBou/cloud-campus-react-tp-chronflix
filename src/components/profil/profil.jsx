import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Profil = ({ user, chroniques }) => {
  const [chroniquesDisplay, setChroniquesDisplay] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentChron, setCurrentChron] = useState(null);

  const handleUpdate = (chron) => {
    setTitle(chron.titre);
    setContent(chron.contenu);
    setIsUpdating(true);
    setCurrentChron(chron)
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:3000/Chroniques/${currentChron.id}/`, {
      id: currentChron.id,
      owner: currentChron.owner,
      titre: title,
      auteur: currentChron.auteur,
      genre: currentChron.genre,
      contenu: content
    }).then( res => location.reload()).catch(err => console.log(err))
  }

  return (
    <div className="profile-container">
      <div className="profile-row">
        <div>
          <img src="https://via.placeholder.com/150" alt="" />
          <h3>{user.username}</h3>
        </div>
        <div className="profil-all-poste">
          {chroniques.map((el) => (
            <div
              className="profile-poste"
              onClick={() => setChroniquesDisplay(el.contenu)}>
              <div className="poste-title">
                <img src="https://via.placeholder.com/50" alt="" />
                <h4>{el.titre}</h4>
                <i
                  className="fa-solid fa-pen"
                  onClick={() => handleUpdate(el)}></i>
              </div>
            </div>
          ))}
          {chroniques.length === 0 ? <h2>Aucune chroniques créer...</h2> : null}
        </div>
      </div>
      {isUpdating ? (
        <div className="posteContent" style={{border: "none"}}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            required
            id="name"
            label="Titre"
            type="search"
            value={title}
          />
          <textarea
              name="poste"
              id=""
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="input-poste"
              required></textarea>
          <button onClick={handleSubmit}>Valider</button>
        </div>
      ) : (
        isUpdating === false &&
        chroniquesDisplay !== "" && (
          <div className="posteContent">{chroniquesDisplay}</div>
        )
      )}
    </div>
  );
};

export default Profil;
