import { FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userLog")) {
      navigate("/");
    }
    axios
      .get("http://localhost:3000/Accounts")
      .then((res) => setAccounts(res.data));
  }, []);

  const handleSubmit = () => {
      for (const account of accounts) {
          if(account.username === username && account.password === password){
              localStorage.setItem('userInfo', JSON.stringify(account))
              navigate('/')
          } else console.log('error');
      }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Se connecter</h2>
        <FormControl className="form-login">
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
            type={"search"}
            id="passwordInp"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <button onClick={handleSubmit}>Valider</button>
      </div>
    </div>
  );
};

export default Login;
