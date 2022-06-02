import axios from "axios";
import React, { useEffect, useState } from "react";
import Poste from "../components/choniques/poste";

const Chroniques = () => {
  const [chroniquesArr, setChroniquesArr] = useState([]);
  const [lastChron, setLastChron] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/Chroniques")
      .then((res) => setChroniquesArr(res.data));
  }, []);

  useEffect(() => {
    setLastChron(chroniquesArr.length - 4)
  }, [chroniquesArr])


  return (
    <div className="chroniques">
      <h1 style={{ textAlign: "center" }}>Derniers posts</h1>
      <div className="lastPost">
        {chroniquesArr.map((el, index) => (
          index > lastChron ? (<Poste
          title={el.titre}
          gender={el.genre}
          content={el.contenu}
          author={el.auteur}
          id={el.id}
          key={index}
        />) : null
        ))}
      </div>
      <h1 style={{ textAlign: "center" }}>Tous les chroniques</h1>
      <input type={"text"} value={filter} onChange={e => setFilter(e.target.value)} placeholder="Rechercher par titre" style={{
        margin: "2rem auto",
        width: "30%",
        border: 'none',
        boxShadow: "1px 1px 7px black",
        padding: "7px",
        borderRadius: "7px",
        outline: 'none',
      }}/>
      <div className="AllPost">
        {chroniquesArr.map((el, index) => (
          el.titre.toLowerCase().includes(filter) ? (
            <Poste
            title={el.titre}
            gender={el.genre}
            content={el.contenu}
            author={el.auteur}
            id={el.id}
            key={index}
          />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default Chroniques;
