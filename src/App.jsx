import '/src/assets/styles/index.css'
import Header from "./components/Header.jsx";
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import { useState } from 'react';
import NewTeamForm from "./components/NewTeamForm.jsx";
import Teams from "./components/Teams.jsx";

function App() {

  // players states
  const [players, setPlayers] = useState([]);
  const [pendingModification, setPendingModification] = useState(false);
  const [updateUser, setUpdateUser] = useState({});

  //teams states
  const [teams, setTeams] = useState([])

  return (
    <>
      <Header/>
      <main>
        {/* @todo faire un objet avec les props et spreadoperator pour récupérer tout l'objet*/}
        <NewTeamForm teams={teams} setTeams={setTeams}/>
        <Teams teams={teams} setTeams={setTeams} players={players}/>
        <NewPlayerForm players={players} setPlayers={setPlayers} pendingModification={pendingModification} setPendingModification={setPendingModification} updateUser={updateUser} setUpdateUser={setUpdateUser} teams={teams} setTeams={setTeams}/>
        <Players players={players} setPlayers={setPlayers} pendingModification={pendingModification} setPendingModification={setPendingModification} updateUser={updateUser} setUpdateUser={setUpdateUser}/>
      </main>
    </>
  )
}

export default App
