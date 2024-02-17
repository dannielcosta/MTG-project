import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>ERROR 404 PAGE NOT FOUND</h1>
        <Link to={"/"}>
            <button>
                Return to Home Page
            </button>
        </Link>
    </div>
  )
}

export default Error