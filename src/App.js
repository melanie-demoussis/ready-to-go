import "./App.css";

import { useState } from "react";

import People from "./components/People";
import Reset from "./components/Reset";

function App() {
  const [people, setPeople] = useState(false);
  const [people1, setPeople1] = useState(false);
  const [people2, setPeople2] = useState(false);
  const [people3, setPeople3] = useState(false);
  return (
    <div className="App">
      <h1>À TABLE !!!</h1>

      <People setState={setPeople} state={people} />
      <People setState={setPeople1} state={people1} />
      <People setState={setPeople2} state={people2} />
      <People setState={setPeople3} state={people3} />
      {!people || !people1 || !people2 || !people3 ? (
        <p>ON ATTEND, TOUT LE MONDE N'EST PAS ARRIVÉ</p>
      ) : (
        <p> ON PEUT MANGER</p>
      )}
      <Reset />
    </div>
  );
}

export default App;
