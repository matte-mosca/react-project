import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from 'react';
import MyNav from './Components/MyNav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MyNav/>
      </header>
    </div>
  );
}

export default App;

