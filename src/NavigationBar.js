import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav>
        <form className='searchForm'>
            <input
                type='text'
                placeholder='Search'
            />
        </form>
        <ul className='menu'>
                <li><Link className='menuLink' to={'/'}>Home</Link></li>
                <li><Link className='menuLink' to={'/post'}>Post</Link></li>
                <li><Link className='menuLink' to={'/about'}>About</Link></li>
            </ul>
    </nav>
  )
}

export default NavigationBar
