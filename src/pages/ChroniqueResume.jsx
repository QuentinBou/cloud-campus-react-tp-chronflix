import axios from "axios";
import React, { useEffect, useState } from "react";

const ChroniqueResume = () => {
  const [thisId, setThisId] = useState(location.href.split("chroniques/")[1]);
  const [thisChronique, setThisChronique] = useState(null);
  const [chroniques, setChroniques] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Chroniques")
      .then((res) => setChroniques(res.data));
  }, []);

  useEffect(() => {
    if (chroniques.length !== 0) {
      for (const chron of chroniques) {
        if (chron.id == thisId) {
          setThisChronique(chron);
        }
      }
    }
  }, [chroniques]);

  return (
    <div className="resume-page">
      {thisChronique && (
        <div className="resume-card">
          <h2>{thisChronique.titre}</h2>
          <p>{thisChronique.contenu}</p>
          <div className="content-det">
            <p
              style={{
                fontSize: ".9em",
                marginLeft: "2rem",
                fontStyle: "italic",
              }}>
              Genre: {thisChronique.genre}
            </p>
            <p
              style={{
                fontSize: "1.1em",
                marginLeft: "2rem",
                fontWeight: "bold",
              }}>
              Auteur: {thisChronique.auteur}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChroniqueResume;
