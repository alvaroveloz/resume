import React from 'react';
import Header from './Header';
import Head from 'next/head'
import NavBar from './NavBar';
import SecondSection from './SecondSection';

const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <title>Resume</title>
      <meta name="description" content='Alvaro Veloz Brito Fullstack Developer' />
    </Head>
      <NavBar />
      <main className='container mx-auto'>
        <Header />
        <SecondSection />
        {children}
      </main>
    </>
  );
};

export default Layout;
