import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  let level = 0;

  // let status = false;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <h3>Your score is too {count >= 60 ? count >= 80 ? 'high' : 'medium' : 'low'}</h3>

        <button onClick={() => setCount((count) => count + 1)}>
          Count is: {count}
        </button>

        {(() => {

          if( count >= 10 && count < 20 ) {
            level = 1
          }
          else if( count >= 20 && count < 30 ) {
            level = 2
          }
          else if( count >= 30 ){
            level = 3
          }

        })()}

        <h3>Your Level: {level}</h3>
        
      </div>
    </>
  )
}

export default App
