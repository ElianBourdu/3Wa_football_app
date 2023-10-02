export default function Players({players, setPlayers, form, setForm, modify, setModify}) {

  let handleDelete = (playerFirstName) => {
    // supprimer dans players
    setPlayers(players.filter(player => player.playerFirstName !== playerFirstName));
  }

  let handleModify = (player) => {
    setForm(true);
    setModify(player);
  }

  return(
    <>
        <div className={"player__header"}>
            <p>player first name:</p>
            <p>player last name:</p>
            <p>player age: </p>
            <p>player role: </p>
        </div>
      {players.length !== 0 ? (players.map(player =>
          (
              <div key={player.playerFirstName} className={"player"}>
                <p>{player.playerFirstName}</p>
                <p>{player.playerLastName}</p>
                <p>{player.playerAge}</p>
                <p>{player.playerRole}</p>
                <p><button onClick={() => handleDelete(player.playerFirstName)}>X</button></p>
                {form ? "" : <p><button onClick={() => handleModify(player)}>Modify</button></p> }
                
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

