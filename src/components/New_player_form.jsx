import { useState } from "react"

export default function New_player_form(players, setPlayers) {

    const [player, setPlayer] = useState({last_name : "", first_name : "", age : "", role : ""});

    let handle_change = (e) => {
        if(e.target.id === "last_name")
        {
            setPlayer({
                ...player,
                last_name : e.taget.value,
            })
        }
    }

    console.log(player);

    return(
        <form>
            Ajouter un joueur

            <label for="last_name">Nom :</label>
            <input type="text" id="last_name" onChange={ handle_change }></input>
            <label for="first_name">Prénom :</label>
            <input type="text" id="first_name" onChange={ handle_change }></input>
            <label for="age">Âge :</label>
            <input type="number" id="age" min="18" max="40" onChange={ handle_change }></input>
            <label for="role">Poste :</label>
            <input type="text" id="role" onChange={ handle_change }></input>
            <button>Ajouter le joueur</button>
        </form>
    )
}