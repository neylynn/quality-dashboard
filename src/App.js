// import logo from './logo.svg';
// import './App.css';
import React from "react";
import logo from './bp-logo.png';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>
    <img src={logo} alt="Quality Logo"/>
    <h1 style={{
      color: '#6EC177',
      margin: 0
    }}>Hello World</h1>
      <p>What's up, Coming soon!</p>
    </div>
  )
}

export default App;
