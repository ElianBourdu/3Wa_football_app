import { useState } from "react"

export default function NewPlayerForm({players, setPlayers, pendingModification, setPendingModification, updateUser, setUpdateUser}) {

  const [idPlayer, setIdPlayer] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = e => {
    // @todo check input
    e.preventDefault();
    const newPlayer = {
      idPlayer, 
      firstName,
      lastName,
      age,
      role
    };
    setPlayers([...players, newPlayer])
    setIdPlayer(prevId => prevId + 1);
    setFirstName('');
    setLastName('');
    setAge('');
    setRole('');
  }

  const handleUpdateUser = (e, idPlayer) => {
    e.preventDefault();

    const updatedPlayers = players.map(player => {
      if(player.idPlayer === idPlayer)
      {
        return updateUser;
      }
      return player;
    })
    setPlayers(updatedPlayers);
    setPendingModification(false);
  }
  
  const handleChange = (e) => {
    setUpdateUser(
      {
        ...updateUser,
        [e.target.name] : e.target.value
      }
    )  
  }


  return(
    <>
    { pendingModification ?

    <form onSubmit={(e) => handleUpdateUser(e, updateUser.idPlayer)} className={"NewPlayerForm"}>
      <h2 className={"NewPlayerForm__title"}>Formulaire de modification de joueur :</h2>

      <label htmlFor={"last_name"}>Nom :</label>
      {/* @todo le setupdate à corriger */}
      <input type="text" value={updateUser.lastName} name="lastName" onChange={handleChange}></input>
      <label htmlFor={"first_name"}>Prénom :</label>
      <input type="text" value={updateUser.firstName} name="firstName" onChange={handleChange}></input>
      <label htmlFor={"age"}>Âge :</label>
      <input type="number" value={updateUser.age} name="age" min="18" max="40" onChange={handleChange}></input>
      <label htmlFor={"role"}>Poste :</label>
      <input type="text" value={updateUser.role} name="role" onChange={handleChange}></input>
      <button className={"submitButton"} type={"submit"}>Modifier le joueur</button>
    </form>

    : 

    <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
      <h2 className={"NewPlayerForm__title"}>Formulaire d'ajout de joueur :</h2>

      <label htmlFor={"last_name"}>Nom :</label>
      <input type="text" value={lastName} id="last_name" onChange={e => setLastName(e.target.value) }></input>
      <label htmlFor={"first_name"}>Prénom :</label>
      <input type="text" value={firstName} id="first_name" onChange={e => setFirstName(e.target.value) }></input>
      <label htmlFor={"age"}>Âge :</label>
      <input type="number" value={age} id="age" min="18" max="40" onChange={e => setAge(e.target.value) }></input>
      <label htmlFor={"role"}>Poste :</label>
      <input type="text" value={role} id="role" onChange={e => setRole(e.target.value) }></input>
      <button className={"submitButton"} type={"submit"}>Ajouter le joueur</button>
    </form>

    }
    </>


    // formulaire modification
  )
}