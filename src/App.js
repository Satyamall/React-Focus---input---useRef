
import './App.css';
import {useRef} from "react";

function App() {
  const ref=useRef(null);

  const handleClick=()=>{
     ref.current.focus()
     console.log(ref)
  }

  return (
    <div className="App">
        <h1>Focus - input - useRef</h1>
        <div>
          <input ref={ref} placeholder="Type Something" type="text"/>
          <button onClick={handleClick}>Click</button>
        </div>
    </div>
  );
}

export default App;
