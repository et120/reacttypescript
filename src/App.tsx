import React, { useEffect, useState } from 'react';
import './App.css';
import getData from './DataServices/DataServices';
import Astronaut from './Interfaces/Iinterface';

function App() {
  const [astronautInfo, setAstronautInfo] = useState<Astronaut>();

  useEffect(() => {
    const astronautData = async () => {
      const fetchedData = await getData();
      setAstronautInfo(fetchedData);
    }

    astronautData();
  }, [])

  return (
    <div>
      <h1>{astronautInfo?.people.map(person => `${person.name} ${person.craft} `)}</h1>
    </div>
  );
}

export default App;
