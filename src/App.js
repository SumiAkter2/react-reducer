import { useState } from "react";

import { createContext } from "react";
import "./App.css";
import Child from "./Pages/Child";
import LongForm from "./Pages/LongForm";
import Parents from "./Pages/Parents";
import ShortForm from "./Pages/ShortForm";

export const CountContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <CountContext.Provider value={value}>
      <div className="App">
        {/* <Parents /> */}
        {/* <ShortForm /> */}
        {/* <Child/> */}
        <LongForm />
      </div>
    </CountContext.Provider>
  );
}

export default App;
