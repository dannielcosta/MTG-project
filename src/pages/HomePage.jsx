import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import CardOfDay from '../components/CardDayDetail'
import FactOfDay from '../components/FactDayDetail'

function HomePage() {
  return (
    <main>
      <section className="mainSection">
        <div>
          <Link to={'/cards'}>
            <button className='cardListBtn'>Cards List</button>
          </Link>
        </div>
      </section>
      
      <section className="sectionDay">
        <div>
          <CardOfDay/>
          <Link to="/"><button>Card Details</button></Link>
          <FactOfDay/>
          <Link to="/facts"><button>More Fun Facts</button></Link>
        </div>
      </section>
      
      <Footer/>
    </main>
  )
}

export default HomePage