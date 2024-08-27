import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {

    return (

    <div className='navbar'>
        <ul className='lista'>
            <li>
                <p>La Liga</p>
            </li>
            <li>
                <p>Premier League</p>
            </li>
            <li>
                <p>Bundesliga</p>
            </li>
        </ul>
        <CartWidget/>
    </div>

    )
}

export default Navbar