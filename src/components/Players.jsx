export default function Players(players) {
  console.log(players.players)

  return(
    <>
      {players.players.length !== 0 ? (players.players.map(player =>
          (
            <div key={player.playerFirstName}>
              <p>{player.playerFirstName}</p>
              <p>{player.playerLastName}</p>
              <p>{player.playerAge}</p>
              <p>{player.playerRole}</p>
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

