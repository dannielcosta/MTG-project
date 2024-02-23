import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className={"errorPage"}>
        <h1>ERROR 404 CARD NOT FOUND</h1>
        <Link to={"/"}>
         <button className="btn-31">
              <span className="text-container">
                <span className="text">Back To Home Page</span>
              </span>
          </button>
        </Link>
        <img src={"images/404-cardNotFound.webp"} style={{width:"280px", borderRadius: "20px"}} />   </div>
  )
}

export default Error