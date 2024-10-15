import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Post from './components/Post/Post';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
