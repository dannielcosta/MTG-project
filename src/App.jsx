import './App.css'
import { Routes, Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Main Page and Error
import HomePage from './pages/HomePage';
import Error from './pages/Error'

//  About, Facts and Contacts
import About from './pages/About-Contacts/About';
import Contacts from './pages/About-Contacts/Contacts';
import FactsPage from './pages/About-Contacts/FactsPage';

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

        {/* Fallback page */}
        <Route path='*' element={<Error/>}/>
       </Routes>
      </main>
      
  )
}

export default App
