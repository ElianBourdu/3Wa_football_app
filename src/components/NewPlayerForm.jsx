import { useState } from "react"

export default function NewPlayerForm({players, setPlayers, pendingModification, setPendingModification, updateUser, setUpdateUser}) {

  const [idPlayer, setIdPlayer] = useState(1)
  const [playerFirstName, setPlayerFirstName] = useState('')
  const [playerLastName, setPlayerLastName] = useState('')
  const [playerAge, setPlayerAge] = useState('')
  const [playerRole, setPlayerRole] = useState('')

  const handleSubmit = e => {
    // @todo check input
    e.preventDefault();
    const newPlayer = {
      idPlayer, 
      playerFirstName,
      playerLastName,
      playerAge,
      playerRole
    };
    setPlayers([...players, newPlayer])
    setIdPlayer(prevId => prevId + 1);
    setPlayerFirstName('');
    setPlayerLastName('');
    setPlayerAge('');
    setPlayerRole('');
  }

  const handleUpdateUser = (e, idPlayer) => {
    e.preventDefault();
    console.log(idPlayer);
    // quand on update pas, ça supprime
    setPlayers(players.filter(player => player.idPlayer !== idPlayer));
    console.log(players);
    setPlayers([...players, updateUser]);
    console.log(players);
    setPendingModification(false);
  }
  
  console.log(players);
  // console.log(updateUser);

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
      <input type="text" value={updateUser.playerLastName} name="playerLastName" onChange={handleChange}></input>
      <label htmlFor={"first_name"}>Prénom :</label>
      <input type="text" value={updateUser.playerFirstName} name="playerFirstName" onChange={handleChange}></input>
      <label htmlFor={"age"}>Âge :</label>
      <input type="number" value={updateUser.playerAge} name="playerAge" min="18" max="40" onChange={handleChange}></input>
      <label htmlFor={"role"}>Poste :</label>
      <input type="text" value={updateUser.playerRole} name="playerRole" onChange={handleChange}></input>
      <button className={"submitButton"} type={"submit"}>Modifier le joueur</button>
    </form>

    : 

    <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
      <h2 className={"NewPlayerForm__title"}>Formulaire d'ajout de joueur :</h2>

      <label htmlFor={"last_name"}>Nom :</label>
      <input type="text" value={playerLastName} id="last_name" onChange={e => setPlayerLastName(e.target.value) }></input>
      <label htmlFor={"first_name"}>Prénom :</label>
      <input type="text" value={playerFirstName} id="first_name" onChange={e => setPlayerFirstName(e.target.value) }></input>
      <label htmlFor={"age"}>Âge :</label>
      <input type="number" value={playerAge} id="age" min="18" max="40" onChange={e => setPlayerAge(e.target.value) }></input>
      <label htmlFor={"role"}>Poste :</label>
      <input type="text" value={playerRole} id="role" onChange={e => setPlayerRole(e.target.value) }></input>
      <button className={"submitButton"} type={"submit"}>Ajouter le joueur</button>
    </form>

    }
    </>


    // formulaire modification
  )
}