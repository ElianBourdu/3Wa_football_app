import {useState} from "react";

export default function Teams ({teams, setTeams, players}) {

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
              {team.players.length !== 0 ? team.players.map(player => (
                  <ul>
                    <li>{player.firstName}</li>
                    <li>{player.lastName}</li>
                    <li>{player.age}</li>
                    <li>{player.role}</li>
                    <li>{player.team}</li>
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