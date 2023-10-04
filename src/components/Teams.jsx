import {useState} from "react";

export default function Teams ({teams, setTeams, players, setPlayers, pendingModificationTeam, setPendingModificationTeam, updateTeam, setUpdateTeam, setTeam}) {

  const handleDelete = (teamName) => {
    const filteredTeams = teams.filter(team => {
      if(team.teamName !== teamName)
      {
        return team;
      }
    })
    setTeams(filteredTeams);
  }

  const handleDeletePlayer = (teamName, idPlayer) => {
    // prendre la bonne équipe
    const updatedTeams = teams.map(team => {
      if(team.teamName === teamName)
      {
        const filteredPlayers = team.players
        .filter(player => player.idPlayer !== idPlayer)
        .map(player =>({...player, team : null}))

        return { ...team, players : filteredPlayers }
      }
      else
      {
        return team
      }

    })
    setTeams(updatedTeams)

    const updatedPlayers = players.map(player => {
      if(player.idPlayer === idPlayer)
      {
        return{...player, team : null}
      }
      return player
    })
    setPlayers(updatedPlayers)
  }



  const handleUpdateTeam = (team) => {
    setPendingModificationTeam(true);
    setUpdateTeam(team)
  }

  return (
    <>
      {teams.length !== 0 && (
        <div className={"teams__header"}>
          <p>Nom d'équipe: </p>
          <p>Couleur d'équipe: </p>
        </div>
      )}
      {teams.length !== 0 ? (teams.map(team => {
         return (
            <div key={team.teamName} className={"team"}>
              <p>{team.teamName}</p>
              <p>{team.teamColor}</p>
              <button onClick={() => handleDelete(team.teamName)}>X</button>
              <button onClick={() => handleUpdateTeam(team)}>Modifier l'équipe</button>
              {team.players.length !== 0 ? team.players.map(player => (
                  <ul>
                    <li>{player.firstName}</li>
                    <li>{player.lastName}</li>
                    <li>{player.age}</li>
                    <li>{player.role}</li>
                    <li>{player.team}</li>
                    <li><button onClick={() => handleDeletePlayer(team.teamName, player.idPlayer)}>X</button></li>
                  </ul>
                )
              ) : (
                <p>Aucun joueur de référencé</p>
              )}
              {/*<button onClick={() => handleDelete(team.idteam)}>X</button>*/}
              {/*<button onClick={() => handleUpdateUser(team)}>UpdateUser</button>*/}

            </div>
          )
        }))
        :
        (
          <p>Aucune équipe de référencé</p>
        )
      }
    </>
  )
}