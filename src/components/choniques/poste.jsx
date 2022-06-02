import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'

const poste = ({title, content, gender, author, id}) => {

  const navigate = useNavigate()

  const handleDelete = (id) => {
    axios({
      method: "DELETE",
      url: "http://localhost:3000/Chroniques/" + id
    }).then(res => location.reload()).catch(err => console.log(err))
  }

  const handleClick = () => {
    navigate(`/chroniques/${id}`)
  }

  return (
    <div className='poste'>
       <div className='poste-title'>
        <img src="https://via.placeholder.com/50" alt="" />
        <h4>{title}</h4>
       </div>
        <div className='poste-content'>
          {content}
        </div>
        <div className="details-poste" style={{display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-around"}}>
        <p style={{fontSize: '.9em', marginLeft: '2rem', fontStyle: 'italic'}}>Genre: {gender}</p>
        <p style={{fontSize: '1.1em', marginLeft: '2rem', fontWeight: 'bold'}} >Auteur: {author}</p>
        </div>
        <div className="actions" style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
        <button style={{
          backgroundColor: "red",
          border: "none",
          fontSize: "1.2rem",
          color: "whitesmoke",
          padding: "7px",
          borderRadius: "10px",
          width: "25%",
          alignSelf: "center",
          margin: "1rem 0",
          cursor: "pointer"
        }}
        onClick={() => handleDelete(id)}
        >Supprimer</button>
        <button style={{
          backgroundColor: "darkblue",
          border: "none",
          fontSize: "1.2rem",
          color: "whitesmoke",
          padding: "7px",
          borderRadius: "10px",
          width: "25%",
          alignSelf: "center",
          margin: "1rem 0",
          cursor: "pointer"
        }}
        onClick={handleClick}
        >Voir plus</button>
        </div>
    </div>
  )
}

export default poste