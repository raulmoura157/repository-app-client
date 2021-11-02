import Routes from "./routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegation from './components/navbar/navbar';
import Footer from './components/footer/footer';

import './global.css'

function App() {
  return (
    <main>
      <Navegation/>
      <Routes/>
      <Footer/>
   </main>
  );
}

export default App;
