import '/src/assets/styles/index.css'
import Header from "./components/Header.jsx";
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import { useState } from 'react';

function App() {

  const [players, setPlayers] = useState([]);
  const [form, setForm] = useState(false);
  const [modify, setModify] = useState([]);

  return (
    <>
      <Header/>
      <main>
        <NewPlayerForm setPlayers={setPlayers} players={players} form={form} modify={modify}/>
        <Players players={players} setPlayers={setPlayers} form={form} setForm={setForm} modify={modify} setModify={setModify}/>
      </main>
    </>
  )
}

export default App
