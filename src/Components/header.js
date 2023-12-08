import React from 'react'
import Logo from '../Assets/whole.png'
import Search from '../Assets/search.png'
import ArrowDown from '../Assets/arrow_down.png'

const Header = ({ editShow, setEditShow }) => {
    const handleEdit = () => {
        setEditShow(!editShow);
    };
    return (
        <>
            <header className="header">
                <div className='logo'>
                    <img src={Logo} alt='logo' className="header__logo" />
                </div>
                <div className='search'>
                    <img src={Search} alt='search' className="header__search" />
                    <input type="search" placeholder='Search for your favourite groups in ATG'></input>
                </div>
                <div className='create' onClick={handleEdit}>
                    <h4>Create Account. <span className='free_span'>It's free!</span></h4>
                    <img src={ArrowDown} alt='arrow_down' className="header__arrow_down" />
                </div>
            </header>
        </>
    )
}

export default Header