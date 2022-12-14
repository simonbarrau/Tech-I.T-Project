import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Tech from './Components/Tech/Tech';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Liongym from './Components/Liongym/Liongym';

function App() {

   
  return (    <>
  
    <BrowserRouter>

    <Routes>

    <Route path='/' element={<Tech/>}/>
    <Route path='/home' element={<Navbar/>}/>
    <Route path='/home/liongym' element={<Liongym/>}/>


    </Routes>

   
    </BrowserRouter>

    </>
  );
}

export default App;
