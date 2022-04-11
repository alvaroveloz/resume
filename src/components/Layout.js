import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
      <>
        <NavBar />
        <main className='container mx-auto py-5'>
        <Header />
            {children}
        
        </main>
      </>
    
  )
}

export default Layout