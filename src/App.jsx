import './App.css'
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CardsList from './pages/CardsList';
import CardDetails from './pages/CardDetails';
import Contacts from './pages/Contacts';
import ExtraPage from './pages/ExtraPage';


function App() {


  return (
    
      <main>
       <Navbar/>

       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cards" element={<CardsList/>}/>
        <Route path="/cards/:cardId" element={<CardDetails/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/extra" element={<ExtraPage/>}/>

       </Routes>
      </main>
      
  )
}

export default App
