import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import ShowHomePart from './Component/ShowHomePart/ShowHomePart';
import Register from './Component/Register/Register';
import NotFound from './Component/NotFound/NotFound';
import RequirdAuth from './RequirdAuth/RequirdAuth';
import Checkout from './Component/CheckOut/Checkout';
import BlogsForAns from './Component/BlogsForAns/BlogsForAns';
import Header from './Component/Header/Header';
import Footer from './Component/FooterPart/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<ShowHomePart></ShowHomePart>}></Route>
        <Route path='/home' element={<ShowHomePart></ShowHomePart>}></Route>
        <Route path='/services' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<BlogsForAns></BlogsForAns>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequirdAuth>
          <Checkout></Checkout>
        </RequirdAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
