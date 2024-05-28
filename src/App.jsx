import './App.css'
import { Routes, Route} from 'react-router-dom';
import { useEffect } from 'react'

// Components
import Navbar from './components/Navbar';

// Main Page and Error
import HomePage from './pages/HomePage';
import Error from './pages/Error'

//  About, Facts and Contacts
import About from './pages/About-Contacts/About';
import Contacts from './pages/About-Contacts/Contacts';
import FactsPage from './pages/About-Contacts/FactsPage';
import TypesCards from './pages/About-Contacts/TypesCards';
import HowToPlay from './pages/About-Contacts/HowToPlay';

// Cards Pages
import CardsList from './pages/Cards/CardsList';
import CardDetails from './pages/Cards/CardDetails';
import CardCreate from './pages/Cards/CardCreate';
import CustomCardsList from './pages/Cards/CustomCardsList';
import CustomCardDetails from './pages/Cards/CustomCardDetails';
import EditCard from './pages/Cards/EditCard';

// Colors Pages
import Artifacts from './pages/Colors/Artifacts';
import Black from './pages/Colors/Black';
import Blue from './pages/Colors/Blue';
import Green from './pages/Colors/Green';
import Red from './pages/Colors/Red';
import White from './pages/Colors/White';
import ReadCards from './pages/About-Contacts/ReadCards'

function App() {
  useEffect(() => {
    alert("Important Information :\n\nThis project is created specifically for student use and educational purposes. Please be aware that all copyrights and trademarks associated with this project belong to their respective owners.\n\nFor any questions or permissions beyond the scope of this notice, please contact the appropriate copyright or trademark owner.\n\nThank you for your cooperation.");
  }, []);

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
        <Route path='/create-your-card' element={<CardCreate/>}></Route>
        <Route path='/custom-cards' element={<CustomCardsList/>}></Route>
        <Route path='/custom-cards/:cardId' element={<CustomCardDetails/>}></Route>
        <Route path='/custom-card-edit/:cardId' element={<EditCard/>}></Route>
        <Route path='/about/artifacts' element={<Artifacts/>}></Route>
        <Route path='/about/black' element={<Black/>}></Route>
        <Route path='/about/blue' element={<Blue/>}></Route>
        <Route path='/about/green' element={<Green/>}></Route>
        <Route path='/about/red' element={<Red/>}></Route>
        <Route path='/about/white' element={<White/>}></Route>
        <Route path='/about/understand-cards' element={<ReadCards/>}></Route>
        <Route path='/about/types-of-cards' element={<TypesCards/>}></Route>
        <Route path='/about/how-to-play' element={<HowToPlay/>}></Route>


        {/* Fallback page */}
        <Route path='*' element={<Error/>}/>
       </Routes>
      </main>
      
  )
}

export default App
