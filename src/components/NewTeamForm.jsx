// nom, couleur maillot, 7 joueurs dont 2
// remplaçants

import {useState} from "react";

export default function NewTeamForm ({teams, setTeams, pendingModificationTeam, setPendingModificationTeam, updateTeam, setUpdateTeam, team, setTeam}) {
  
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

  const handleUpdateTeam = (e, teamName) => {
    e.preventDefault();

    const updatedTeam = teams.map(team => {
      if(team.teamName === teamName)
      {
        return updateTeam;
      }
      return team;
    })
    setTeams(updatedTeam);
    setPendingModificationTeam(false);
  }

  const handleUpdateChange = (e) => {
    setUpdateTeam(
      {
        ...updateTeam,
        [e.target.name] : e.target.value
      }
    )
  }

  return (
    <>
    { pendingModificationTeam ? 

      <form onSubmit={(e) => handleUpdateTeam(e, updateTeam.teamName)} className={"NewPlayerForm"}>
        <h2 className={"NewTeamForm__title"}>Formulaire de modification d'équipes:</h2>

        <label htmlFor={"teamName"}>Nom :</label>
        <input type="text" value={updateTeam.teamName} name="teamName" onChange={handleUpdateChange} disabled></input>
        <label htmlFor={"teamColor"}>Couleur :</label>
        <input type="text" value={updateTeam.teamColor} name="teamColor" onChange={handleUpdateChange}></input>
        <button className={"submitButton"} type={"submit"}>Modifier l'équipe</button>
      </form>

      :

      <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
        <h2 className={"NewTeamForm__title"}>Formulaire de création d'équipes:</h2>

        <label htmlFor={"teamName"}>Nom :</label>
        <input type="text" value={team.teamName} name="teamName" onChange={handleChange}></input>
        <label htmlFor={"teamColor"}>Couleur :</label>
        <input type="text" value={team.teamColor} name="teamColor" onChange={handleChange}></input>
        <button className={"submitButton"} type={"submit"}>Créer une équipe</button>
      </form>
    }
    </>
  )
}