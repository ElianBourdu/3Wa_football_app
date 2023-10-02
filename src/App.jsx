import '/src/assets/styles/index.css'
import Header from "./components/Header.jsx";
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import { useState } from 'react';

function App() {

  const [players, setPlayers] = useState([]);

  return (
    <>
      <Header/>
      <NewPlayerForm setPlayers={setPlayers} players={players}/>
      <Players players={players}/>
    </>
  )
}

export default App
