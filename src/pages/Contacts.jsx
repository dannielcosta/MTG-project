import React from 'react'
import GHlogo from '../images/github-logo.png'
import LIlogo from '../images/LinkedIn-logo.png'

function Contacts() {
  return (
 
         <div className="Developers">
                
                <div className="dev1">
                    <p><strong>
                        Daniel Costa
                    </strong></p>
                    <div className="Links">
                        <a href="https://github.com/dannielcosta"><img className="about-gh" src={`${GHlogo}`}></img></a>
                        <a href="https://www.linkedin.com/in/daniel-costa-144924153/"><img className="about-li" src={`${LIlogo}`}></img></a>
                    </div>
                </div>

                <div className="dev2">
                    <p><strong>
                        Filipe Teixeira
                    </strong></p>
                    <div className="Links">
                        <a href="https://github.com/FilipeTeixeira09"><img className="about-gh" src={`${GHlogo}`}></img></a>
                        <a href="https://www.linkedin.com/in/filipe-teixeira-full-stack-developer/"><img className="about-li" src={`${LIlogo}`}></img></a>
                    </div>
                </div>

    </div>
  )
}

export default Contacts