export default function Players({players, setPlayers, pendingModification, setPendingModification, updateUser, setUpdateUser}) {

  let handleDelete = (idPlayer) => {

    const filteredPlayers = players.filter(player => {
      if(player.idPlayer !== idPlayer)
      {
        return player;
      }
    })
    // setPlayers(players.filter(player => player.idPlayer !== idPlayer));
    setPlayers(filteredPlayers);

  }

  let handleUpdateUser = (player) => {
    // console.log(player)
    setPendingModification(true);
    setUpdateUser(player);
  }

  // console.log(pendingModification)
  if (!pendingModification) {
    return(
      <>
        {players.length !== 0 && (
          <div className={"player__header"}>
            <p>player first name:</p>
            <p>player last name:</p>
            <p>player age: </p>
            <p>player role: </p>
          </div>
        )}
        {players.length !== 0 ? (players.map(player =>
            (
              <div key={player.idPlayer} className={"player"}>
                <p>{player.playerFirstName}</p>
                <p>{player.playerLastName}</p>
                <p>{player.playerAge}</p>
                <p>{player.playerRole}</p>
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

