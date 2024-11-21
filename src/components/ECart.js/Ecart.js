import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from "./Nav"

const Ecart = () => {
  return (
    <div className=''>
    <Nav />
    <Outlet />
    </div>
  )
}

export default Ecart;