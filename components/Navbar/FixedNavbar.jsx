import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import DropdownMenu from './DropdownMenu'
// import './FixedNavbar.css'

const FixedNavbar = () => {
  return (
    <div className='FixedNavbar'>
       <div className='left'>
        <SearchBar />  
      </div>
      
      <div className='center'>
        <Logo />  
      </div>
      
      <div className='right'>
        <DropdownMenu />  
      </div>
    </div>
  )
}

export default FixedNavbar
