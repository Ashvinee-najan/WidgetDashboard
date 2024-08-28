import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { HiDotsVertical, HiOutlineRefresh } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdWatchLater } from 'react-icons/md'
import './Style.css'

const Navbar = () => {
  return (
   <nav>
      <div className="logo">CNAPP Dashboard</div>
    
    <input type="text" className='search' placeholder='search' />
    <button>Add Widget <FaPlus/></button>  
    <icon className='icon'><HiOutlineRefresh/></icon>
    <icon className='icon'><HiDotsVertical/></icon>
    <button><MdWatchLater/> Last Days <IoIosArrowDown/></button>

   </nav>
  )
}

export default Navbar