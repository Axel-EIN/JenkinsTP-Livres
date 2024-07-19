import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [livres, setLivres] = useState([])

  const getLivres = async () => {
    const data = await axios.get('http://localhost:8080/api/livre/');
    setLivres(data.data);
  };

  useEffect( () => {
    getLivres();
  }, [] );

  return (
    <>
      <ul>
        {console.log(livres)}
        {livres?.map((un_livre, index) => <li key={un_livre.id}>{un_livre.titre}</li>)}
      </ul>
    </>
  )
}

export default App
