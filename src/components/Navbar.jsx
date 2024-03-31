import React from 'react'
import  {Link}  from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="">
        <div className="first">
        <h1>Moody News</h1>
        </div>
        <div className="second">
            <Link to={'/'}>Home</Link>
        </div>
        </div>
        
    </nav>
    </>
  )
}



export default Navbar
