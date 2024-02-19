import './App.css'
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CardsList from './pages/CardsList';
import CardDetails from './pages/CardDetails';
import Contacts from './pages/Contacts';
import FactsPage from './pages/FactsPage';
import Error from './pages/Error'


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
        <Route path="/facts" element={<FactsPage/>}/>

        {/* Fallback page */}
        <Route path='*' element={<Error/>}/>
       </Routes>
      </main>
      
  )
}

export default App
