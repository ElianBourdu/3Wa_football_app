// nom, couleur maillot, 7 joueurs dont 2
// remplaçants

import {useState} from "react";

export default function NewTeamForm ({teams, setTeams}) {
  const [team, setTeam] = useState({
    teamName: "",
    teamColor: "",
    players: [],
    substitutePlayers: []
  })
  function handleSubmit (e) {
    e.preventDefault()
    setTeams([...teams, team])
    setTeam({
      teamName: "",
      teamColor: "",
      players: [],
      substitutePlayers: []
    })
  }

  function handleChange (e) {
    setTeam({...team, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
      <h2 className={"NewTeamForm__title"}>Formulaire de création d'équipes:</h2>

      <label htmlFor={"teamName"}>Nom :</label>
      <input type="text" value={team.teamName} name="teamName" onChange={handleChange}></input>
      <label htmlFor={"teamColor"}>Couleur :</label>
      <input type="text" value={team.teamColor} name="teamColor" onChange={handleChange}></input>
      <button className={"submitButton"} type={"submit"}>Créer une équipe</button>
    </form>
  )
}