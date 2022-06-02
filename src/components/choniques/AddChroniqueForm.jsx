import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../../node_modules/sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddChroniqueForm = () => {
  const options = [
    {
      label: "Aventure",
      value: "Aventure",
    },
    {
      label: "Romance",
      value: "Romance",
    },
    {
      label: "Comedie",
      value: "Comedie",
    },
  ];

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [gender, setGender] = useState(options[0].value);
  const [author, setAuthor] = useState("");
  const [idCount, setIdCount] = useState(0);
  const user = JSON.parse(localStorage.getItem("userInfo"))

  const resetFields = () => {
    setTitle("");
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/Chroniques", {
        id: idCount,
        owner: user.id,
        titre: title,
        auteur: user.username,
        genre: gender,
        contenu: text,
      })
      .then((res) => navigate("/chroniques"))
      .catch((err) => alert("Une erreur est survenue..."));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/Chroniques")
      .then((res) => setIdCount(res.data.length + 1));
  }, []);

  return (
    <div className="AddChroniqueForm">
      <h1>Ajouter une Chronique</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          required
          id="name"
          label="Titre"
          type="search"
        />
        <FormControl>
          <InputLabel id="select-input-label">Genre :</InputLabel>
          <Select
            labelId="select-input-label"
            id="select-input"
            value={gender}
            label="Genre"
            onChange={(e) => setGender(e.target.value)}>
            {options.map((el) => (
              <MenuItem value={el.value}>{el.value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <label>
            Poste : <br />
            <textarea
              name="poste"
              id=""
              onChange={(e) => setText(e.target.value)}
              className="input-poste"
              required></textarea>
          </label>
        </div>
        <div>
          <input type="submit" value="Envoyer" className="btn-submit" />
        </div>
      </form>
    </div>
  );
};

export default AddChroniqueForm;
