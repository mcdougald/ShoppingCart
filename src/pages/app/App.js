import React from 'react';
// import logo from '../assets/images/logo.svg';
import './App.scss';
import '../../components/Navigation/header/header.module.scss'

import Header from '../../components/Navigation/header/header'
import Footer from '../../components/Navigation/footer/footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <footer>
          <Footer/>
        </footer>
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
