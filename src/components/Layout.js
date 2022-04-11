import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
      <>
        <NavBar>
            {children}
        </NavBar>
      </>
    
  )
}

export default Layout