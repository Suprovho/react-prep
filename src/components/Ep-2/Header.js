import React from 'react'
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
const Header = () => {
  const status=useOnlineStatus();
  return (
    <div className='flex  items-center justify-between p-4 mr-4'>
         <Users />
        <ul className='flex gap-8'>
          <li className=''>online status:{status?"🟢":"🔴"}</li>
            <Link to={"/"}> <li>Home</li></Link>
            <Link to={"/about"}><li>about</li></Link>
        </ul>
    </div>
  )
}

export default Header