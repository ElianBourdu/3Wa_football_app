import '/src/assets/styles/index.css'
import Header from "./components/Header.jsx";
import New_player_form from './components/New_player_form.jsx';
import Players from './components/Players.jsx';
import { useState } from 'react';

function App() {

  const [players, setPlayers] = useState({});

  return (
    <>
      <Header/>
      <Players players={players}/>
      <New_player_form set_players={setPlayers} players={players}/>
    </>
  )
}

export default App
