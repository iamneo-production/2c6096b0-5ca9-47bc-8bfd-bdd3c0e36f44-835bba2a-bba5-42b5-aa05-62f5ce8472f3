import './App.css';
import Register from './Components/Assets/Register';
import Login from './Components/Assets/Login';
import Privacy from './Components/Assets/Privacy';
import Terms from './Components/Assets/Terms';
import Sidebar from './Components/Assets/Sidebar';
import Feedback from './Components/Assets/Feedback';
import Footer from './Components/Assets/Footer';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/Assets/Contact';
import Faq from './Components/Assets/Faq';
import About from './Components/Assets/About';
import Weatherapp from './Components/Assets/Weatherapp';
export default function App(){
  return (
    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Footer/>} />
          <Route path='/reg' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/privacy' element={<Privacy/> }/>
          <Route path='/terms' element={<Terms/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/feed' element={<Feedback/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/weather' element={<Weatherapp/>} />

        </Routes>
        <Sidebar/>
      </BrowserRouter> 
   
  )
}
