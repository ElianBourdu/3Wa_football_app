import { useState } from "react"

export default function NewPlayerForm({players, setPlayers, form, modify}) {

  const [playerFirstName, setPlayerFirstName] = useState('')
  const [playerLastName, setPlayerLastName] = useState('')
  const [playerAge, setPlayerAge] = useState('')
  const [playerRole, setPlayerRole] = useState('')
  

  const handleSubmit = e => {
    // @todo check input

    e.preventDefault();
    setPlayers([...players, {playerFirstName, playerLastName, playerAge, playerRole}])
    setPlayerFirstName('');
    setPlayerLastName('');
    setPlayerAge('');
    setPlayerRole('');
  }

  const handleModify = e => {
    e.preventDefault();
    setPlayers([...players, {playerFirstName, playerLastName, playerAge, playerRole}]);
    console.log(players);
  }

  return(
    <>
    { form ? 

    <form onSubmit={handleModify} className={"NewPlayerForm"}>
      <h2 className={"NewPlayerForm__title"}>Formulaire de modification de joueur :</h2>

      <label htmlFor={"last_name"}>Nom :</label>
      <input type="text" placeholder={modify.playerLastName} id="last_name" onChange={e => setPlayerLastName(e.target.value) }></input>
      <label htmlFor={"first_name"}>Prénom :</label>
      <input type="text" placeholder={modify.playerFirstName} id="first_name" onChange={e => setPlayerFirstName(e.target.value) }></input>
      <label htmlFor={"age"}>Âge :</label>
      <input type="number" placeholder={modify.playerAge} id="age" min="18" max="40" onChange={e => setPlayerAge(e.target.value) }></input>
      <label htmlFor={"role"}>Poste :</label>
      <input type="text" placeholder={modify.playerRole} id="role" onChange={e => setPlayerRole(e.target.value) }></input>
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