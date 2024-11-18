import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import WelcomePage from "./components/WelcomePage";

import './styles/app.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <NavMenu/>
      <WelcomePage/>
    </div>
  );
}

export default App;
