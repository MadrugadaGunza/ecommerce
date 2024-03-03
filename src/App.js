//styles
import './App.css';
// dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Header from './Components/Header';
import Footer from './Components/Footer';
//pages
import Home from './Pages/Home';
import Clients from './Pages/Clients';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
