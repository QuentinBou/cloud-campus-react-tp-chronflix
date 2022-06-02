import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Profil from '../components/profil/profil'

const Profils = () => {

  const user = JSON.parse(localStorage.getItem('userInfo'))
  const [userChroniques, setUserChroniques] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Chroniques")
    .then((res) => {
      let userChrons = []
      for (const chron of res.data) {
        if (chron.owner === user.id){
          userChrons.push(chron)
        }
      }
      setUserChroniques(userChrons)
    });
  }, [])

  useEffect(() => {
    console.log(userChroniques);
  }, [userChroniques])

  return (
    <div>
      <Profil user={user} chroniques={userChroniques} />
    </div>
  )
}

export default Profils