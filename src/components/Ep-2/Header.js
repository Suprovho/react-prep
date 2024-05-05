import React from 'react'
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='flex  items-center justify-between p-4 mr-4'>
         <Users />
        <ul className='flex gap-8'>
           <Link to={"/"}> <li>Home</li></Link>
            <Link to={"/about"}><li>about</li></Link>
        </ul>
    </div>
  )
}

export default Header