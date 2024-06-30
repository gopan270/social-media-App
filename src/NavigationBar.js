import React from 'react'

const NavigationBar = () => {
  return (
    <nav>
        <form className='searchForm'>
            <input
                type='text'
                placeholder='Search'
            />
        </form>
        <ul>
                <li>Home</li>
                <li>Posts</li>
                <li>About</li>
            </ul>
    </nav>
  )
}

export default NavigationBar
