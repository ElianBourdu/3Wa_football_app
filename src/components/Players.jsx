export default function Players({players, setPlayers, pendingModification, setPendingModification, updateUser, setUpdateUser}) {
  console.log(players)
  let handleDelete = (idPlayer) => {

    const filteredPlayers = players.filter(player => {
      if(player.idPlayer !== idPlayer)
      {
        return player;
      }
    })
    setPlayers(filteredPlayers);

  }

  let handleUpdateUser = (player) => {
    setPendingModification(true);
    setUpdateUser(player);
  }
  if (!pendingModification) {
    return(
      <>
        {players.length !== 0 && (
          <div className={"player__header"}>
            <p>player first name:</p>
            <p>player last name:</p>
            <p>player age: </p>
            <p>player role: </p>
            <p>player team: </p>
          </div>
        )}
        {players.length !== 0 ? (players.map(player =>
            (
              <div key={player.idPlayer} className="player">
                <p>{player.firstName}</p>
                <p>{player.lastName}</p>
                <p>{player.age}</p>
                <p>{player.role}</p>
                <p>{player.team}</p>
                <button onClick={() => handleDelete(player.idPlayer)}>X</button>
                <button onClick={() => handleUpdateUser(player)}>UpdateUser</button>

              </div>
            )
          ))
          :
          (
            <p>Aucun joueur de référencé</p>
          )
        }
      </>
    )
  }
}

