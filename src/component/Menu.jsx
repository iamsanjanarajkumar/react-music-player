import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props){

    const toggle = () =>{
       let menu = document.querySelector(".menu");
       let btn = document.querySelector(".btn-responsive");
       menu.classList.toggle('responsive');
       btn.classList.toggle('active');
    }
    return(
        <header>
            <nav>
                <div className='wrapper'>
                <div className="logo">
                    <Link to={`/`}>React Music</Link>
                </div>
                <button className='btn-responsive' onClick={toggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <ul className='menu'>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                </ul>

                </div>
            </nav>
        </header>
    )
}
export default Menu