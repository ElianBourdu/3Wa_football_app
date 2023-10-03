import '/src/assets/styles/index.css'
import Header from "./components/Header.jsx";
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import { useState } from 'react';

function App() {

  const [players, setPlayers] = useState([]);
  const [pendingModification, setPendingModification] = useState(false);
  const [updateUser, setUpdateUser] = useState({});

  return (
    <>
      <Header/>
      <main>
        {/* @todo faire un objet avec les props et spreadopérator pour récupérer tout l'objet*/}
        <NewPlayerForm players={players} setPlayers={setPlayers} pendingModification={pendingModification} setPendingModification={setPendingModification} updateUser={updateUser} setUpdateUser={setUpdateUser}/>
        <Players players={players} setPlayers={setPlayers} pendingModification={pendingModification} setPendingModification={setPendingModification} updateUser={updateUser} setUpdateUser={setUpdateUser}/>
      </main>
    </>
  )
}

export default App
