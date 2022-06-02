import { FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios
      .get("http://localhost:3000/Accounts")
      .then((res) => setAccounts(res.data));
    }, [])

    const handleSubmit = () => {
        if (password !== "" && password === confirmPassword){
            axios.post("http://localhost:3000/Accounts", {
                id: accounts.length + 1,
                isAdmin: false,
                username: username,
                password: password
            }).then(res => {
                alert("Création de votre compte éffectué avec succès !")
                navigate('/login')
            }).catch(err => alert('Une erreur est survenue...'))
        }
    }

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>S'inscrire</h2>
        <FormControl className="form-register">
          <TextField
            label="Username"
            type={"search"}
            id="usernameInp"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type={"password"}
            id="Password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type={"password"}
            id="ConfirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <button onClick={handleSubmit}>Valider</button>
        <div className="already-container">Déjà un compte ? <Link to="/login">Se connecter</Link></div>
      </div>
    </div>
  );
};

export default Register;
