import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const navbar = () => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUser(JSON.parse(localStorage.getItem("userInfo")));
    }
    console.log(user + " past");
  }, [window.location.href]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(false)
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <img src="data:image/png;base64,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" />
      <h1>
        <Link to="/">chroflix</Link>
      </h1>
      <div className="liens">
        <Link to="/chroniques">Chroniques</Link>
        <Link to="/apropos">A propos</Link>

        {user ? (
          <>
            <Link to="/profil">Profil</Link>
            <Link to="/add">Ajouter une chronique</Link>
            <p onClick={handleLogout}>Se déconnecter</p>
          </>
        ) : (
          <Link to={"/login"}>Se connecter</Link>
        )}
      </div>
    </nav>
  );
};

export default navbar;
