import '/src/assets/styles/index.css'
import Header from "./components/Header.jsx";
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import { useEffect, useState } from 'react';
import NewTeamForm from "./components/NewTeamForm.jsx";
import Teams from "./components/Teams.jsx";

function App() {

  // players states
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem("players")) || [])
  const [pendingModification, setPendingModification] = useState(false);
  const [pendingModificationTeam, setPendingModificationTeam] = useState(false);
  const [updateUser, setUpdateUser] = useState({});
  const [updateTeam, setUpdateTeam] = useState({});

  //teams states
  const [teams, setTeams] = useState(JSON.parse(localStorage.getItem("teams")) || [])

  const [team, setTeam] = useState({
    teamName: "",
    teamColor: "",
    players: [],
    substitutePlayers: []
  })

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams))
  }, [teams])

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players))
  }, [players])

  return (
    <>
      <Header/>
      <main>
        {/* @todo faire un objet avec les props et spreadoperator pour récupérer tout l'objet*/}
        <NewTeamForm teams={teams} setTeams={setTeams}pendingModificationTeam={pendingModificationTeam} setPendingModificationTeam={setPendingModificationTeam} updateTeam={updateTeam} setUpdateTeam={setUpdateTeam} team={team} setTeam={setTeam}/>
        
        <Teams teams={teams} setTeams={setTeams} players={players} setPlayers={setPlayers} pendingModificationTeam={pendingModificationTeam} setPendingModificationTeam={setPendingModificationTeam} updateTeam={updateTeam} setUpdateTeam={setUpdateTeam} setTeam={setTeam}/>
        
        <NewPlayerForm players={players} setPlayers={setPlayers} pendingModification={pendingModification} setPendingModification={setPendingModification} updateUser={updateUser} setUpdateUser={setUpdateUser} teams={teams} setTeams={setTeams}/>
        <Players players={players} setPlayers={setPlayers} pendingModification={pendingModification} setPendingModification={setPendingModification} updateUser={updateUser} setUpdateUser={setUpdateUser}/>
      </main>
    </>
  )
}

export default App
