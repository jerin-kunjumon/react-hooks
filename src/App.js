import './App.css';
import { useState , useEffect, useRef} from "react";
import Timer from './useEffect'
import Component1 from './components/components';

function App() {

  const [colour, setColor] = useState("red");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="App">
      <h3>count : {count.current}</h3>
     <h1 style={{color: colour}}>My favorite color is {colour}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <Timer />
      <Component1 />



    </div>
  );
}



export default App;
