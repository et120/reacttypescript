import React, { useEffect, useState } from 'react';
import './App.css';
import getData from './DataServices/DataServices';
import Astronaut from './Interfaces/Iinterface';
import AstronautComponent from './components/AstronautComponent';

function App() {
  const [astronautInfo, setAstronautInfo] = useState<Astronaut>();
  let [count, setCount] = useState<number>(0);

  const nextPage = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const astronautData = async () => {
      const fetchedData = await getData();
      setAstronautInfo(fetchedData);
    }

    astronautData();
  }, [])

  return (
    <div>
      <button onClick={() => nextPage()}>Next Page</button>
      {
        astronautInfo && <AstronautComponent shipName={astronautInfo.crafts[count].shipName} members={astronautInfo.crafts[count].members} />
        // astronautInfo && astronautInfo.people.map((astronaut, index) => {
        //   return (
        //     <div key={index}>
        //       <AstronautComponent name={astronaut.name} craft={astronaut.craft}/>
        //     </div>
        //   )
        // })
      }
    </div>
  );
}

export default App;
