export default function Teams ({teams, setTeams}) {
  console.log(teams)
  return (
    <>
      {teams.length !== 0 && (
        <div className={"teams__header"}>
          <p>Nom d'équipe: </p>
          <p>Couleur d'équipe: </p>
        </div>
      )}
      {teams.length !== 0 ? (teams.map(team =>
          (
            <div key={team.teamName} className={"team"}>
              <p>{team.teamName}</p>
              <p>{team.teamColor}</p>
              {/*<button onClick={() => handleDelete(team.idteam)}>X</button>*/}
              {/*<button onClick={() => handleUpdateUser(team)}>UpdateUser</button>*/}

            </div>
          )
        ))
        :
        (
          <p>Aucune équipe de référencé</p>
        )
      }
    </>
  )
}