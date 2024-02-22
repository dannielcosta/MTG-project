import React from "react";
import GHlogo from "../../images/github-logo.png";
import LIlogo from "../../images/LinkedIn-logo.png";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <section>
      <div className="Developers">
        <div className="devs">
          <div className="dev1">
            <section className="headerCard">
              <p className="devName">
                <strong>Daniel Costa</strong>
              </p>
              <div className="Links">
                <a href="https://github.com/dannielcosta">
                  <img className="about-gh" src={`${GHlogo}`}></img>
                </a>
                <a href="https://www.linkedin.com/in/daniel-costa-144924153/">
                  <img className="about-li" src={`${LIlogo}`}></img>
                </a>
              </div>
            </section>
            <section className="devType">
              <p>Developer - God Mode</p>
              <img src={"src/images/logo.png"} />
            </section>
            <section className="fullStack">
              <p>Full-Stack Web Developer</p>
              <div className="fullStackDesc">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <ul>
                  <li>Javascript (ES6)</li>
                  <li>React</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="dev2">
            <section className="headerCard">
              <p className="devName">
                <strong>Filipe Teixeira</strong>
              </p>
              <div className="Links">
                <a href="https://github.com/FilipeTeixeira09">
                  <img className="about-gh" src={`${GHlogo}`}></img>
                </a>
                <a href="https://www.linkedin.com/in/filipe-teixeira-full-stack-developer/">
                  <img className="about-li" src={`${LIlogo}`}></img>
                </a>
              </div>
            </section>
            <section className="devType">
              <p>Developer - God Mode</p>
              <img src={"src/images/logo.png"} />
            </section>
            <section className="fullStack">
              <p>Full-Stack Web Developer</p>
              <div className="fullStackDesc">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <ul>
                  <li>Javascript (ES6)</li>
                  <li>React</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="ButtonCentered">
          <Link to={"/"}>
            <button className="btn-31">
              <span className="text-container">
                <span className="text">Back</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
