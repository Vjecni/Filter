import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="navLeft">
                <div className="navLogo">
                    <a href="#">Filter</a>
                </div>
                <div className="navSearch">
                    <input type="text" />
                </div>
            </div>
            <div className="navTools">
                <a href="#">profile</a>
                <a href="#">profile</a>
                <a href="#">profile</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar