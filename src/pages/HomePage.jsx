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
            <button className="btn-31">
              <span className="text-container">
                <span className="text">Cards List</span>
              </span>
            </button>
          </Link>
        </div>
      </section>
      <section className="WhiteBar">

      </section>

      <section className="sectionDay">
        <div className="divWallpaper">
          <div className="overlay">
            <div className="secInfo">
              <CardOfDay />
              <Link to="/" className="btn">
                Card Details
              </Link>
              <FactOfDay />
              <Link to="/facts" className="btn">
                More Fun Facts
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}

export default HomePage