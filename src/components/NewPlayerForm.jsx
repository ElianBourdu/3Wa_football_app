import { useState } from "react"

export default function NewPlayerForm({players, setPlayers, pendingModification, setPendingModification, updateUser, setUpdateUser, teams, setTeams}) {

  const [idPlayer, setIdPlayer] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [role, setRole] = useState('')
  const [team, setTeam] = useState('')

  console.log('team', team)
  const handleSubmit = e => {
    // @todo check input
    e.preventDefault();
    const newPlayer = {
      idPlayer, 
      firstName,
      lastName,
      age,
      role,
      team
    };
    console.log(newPlayer)
    setPlayers([...players, newPlayer])
    const updatedTeams = teams.map(t => {
      if (t.teamName === team) {
        t.players.push(newPlayer)
      }
      return t
    })
    console.log(updatedTeams)
    setTeams(updatedTeams);
    console.log(players)
    setIdPlayer(prevId => prevId + 1);
    setFirstName('');
    setLastName('');
    setAge('');
    setRole('');
    setTeam('')
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
  
  const handleUpdateChange = (e) => {
    setUpdateUser(
      {
        ...updateUser,
        [e.target.name] : e.target.value
      }
    )
    console.log(updateUser)
  }

  return(
    <>
    { pendingModification ?

    <form onSubmit={(e) => handleUpdateUser(e, updateUser.idPlayer)} className={"NewPlayerForm"}>
      <h2 className={"NewPlayerForm__title"}>Formulaire de modification de joueur :</h2>

      <label htmlFor={"last_name"}>Nom :</label>
      {/* @todo le setupdate à corriger */}
      <input type="text" value={updateUser.lastName} name="lastName" onChange={handleUpdateChange}></input>
      <label htmlFor={"first_name"}>Prénom :</label>
      <input type="text" value={updateUser.firstName} name="firstName" onChange={handleUpdateChange}></input>
      <label htmlFor={"age"}>Âge :</label>
      <input type="number" value={updateUser.age} name="age" min="18" max="40" onChange={handleUpdateChange}></input>
      <label htmlFor={"role"}>Poste :</label>
      <input type="text" value={updateUser.role} name="role" onChange={handleUpdateChange}></input>
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
      <label htmlFor="team">Choix de l'équipe</label>
      <select name="team" id="team" onChange={e => setTeam(e.target.value)}>
        <option default>choisissez une équipe</option>
        {teams.map(team => {
          console.log(team)
          return (
            <option key={team.teamName} value={team.teamName}>{team.teamName}</option>
          )
        })}
      </select>
      <button className="submitButton">Ajouter le joueur</button>
    </form>

    }
    </>
  )
}