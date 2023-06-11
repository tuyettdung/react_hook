//rafce
import React from 'react'
import Header from '../components/Header'

import {Outlet} from 'react-router-dom'
const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <div className='content' style={{minHeight:650}}>
        <Outlet />

      </div>

      <footer className='fs-3 text-center bg-dark text-white p-3'>
        footer
      </footer>
    </div>
  )
}

export default HomeTemplate