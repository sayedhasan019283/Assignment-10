import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Login from './Component/Login/Login'
import ShowHomePart from './Component/ShowHomePart/ShowHomePart';
import FooterPart from './Component/FooterPart/Footer'

import Register from './Component/Register/Register';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/home' element={<ShowHomePart></ShowHomePart>}></Route>
        <Route path='/services' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <FooterPart></FooterPart>
    </div>
  );
}

export default App;
