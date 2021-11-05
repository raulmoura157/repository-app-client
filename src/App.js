import Routes from "./routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, Navbar } from './components';

import './global.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;

