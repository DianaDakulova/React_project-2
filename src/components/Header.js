import React from "react";

const Header=()=>{
    return (
        <header className='header'>
            <div className="container">
                <div className="d-flex">
                    <h2 className='header__logo'>STARWARS</h2>
                    <nav className='header__nav'>
                        <a href="#" className="header__link">Home</a>
                        <a href="#" className="header__link">About</a>
                        <a href="#" className="header__link">Content</a>
                    </nav>
                </div>
            </div>

        </header>
    )
}
export default Header