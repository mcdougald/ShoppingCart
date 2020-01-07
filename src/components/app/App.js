import React from 'react';
// import logo from '../assets/images/logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const message = `This is the App Component.`;
    return (
      <div className="App">
        {message}
      </div>
      );
    }
  }
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

export default App;
