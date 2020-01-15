import React from 'react';
// import logo from '../assets/images/logo.svg';
import './App.scss';
import '../navigation/header/header.module.scss'

import Header from '../navigation/header/header'

class App extends React.Component {
  render() {
    return (
      <header>
        <Header />
      </header>
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
