import React from 'react'
import GHlogo from '../../images/github-logo.png'
import LIlogo from '../../images/LinkedIn-logo.png'
import CustomCard from '../../images/custom-card.png'

function Contacts() {
  return (
 
         <div className="Developers">
                
                <div className="dev1">
                    <section className='headerCard'>
                        <p className="devName"><strong>
                            Daniel Costa
                        </strong></p>
                        <div className="Links">
                            <a href="https://github.com/dannielcosta"><img className="about-gh" src={`${GHlogo}`}></img></a>
                            <a href="https://www.linkedin.com/in/daniel-costa-144924153/"><img className="about-li" src={`${LIlogo}`}></img></a>
                        </div>
                    </section>
                </div>

                <div className="dev2">
                    <section className='headerCard'>
                        <p className="devName"><strong>
                            Filipe Teixeira
                        </strong></p>
                        <div className="Links">
                            <a href="https://github.com/FilipeTeixeira09"><img className="about-gh" src={`${GHlogo}`}></img></a>
                            <a href="https://www.linkedin.com/in/filipe-teixeira-full-stack-developer/"><img className="about-li" src={`${LIlogo}`}></img></a>
                        </div>
                    </section>
                </div>

    </div>
  )
}

export default Contacts