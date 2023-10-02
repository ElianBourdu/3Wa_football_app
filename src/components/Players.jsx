export default function Players(players) {
  console.log(players.players)

  return(
    <>
      {players.players.length !== 0 ? (players.players.map(player =>
          (
            <>
              <div className={"player__header"}>
                <p>player first name:</p>
                <p>player last name:</p>
                <p>player age: </p>
                <p>player role: </p>
              </div>
              <div key={player.playerFirstName} className={"player"}>
                <p>{player.playerFirstName}</p>
                <p>{player.playerLastName}</p>
                <p>{player.playerAge}</p>
                <p>{player.playerRole}</p>
              </div>
            </>
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

