import Link from 'next/link'
import React from 'react'
import Layout from '../src/components/Layout'

const custom404 = () => {
  return (
      <Layout>
          <div className='p-5'>This page does not exist.
          Please return to 
          <Link href={"/"}>
          <a> Home </a>
          </Link>
          </div>
      </Layout>
  )
}

export default custom404