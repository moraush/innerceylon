import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './menu.css';

const Menu = () => {
    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


  return (
      <>
      <IconContext.Provider value={{color:'FF5A5F'}}>
    <div className="navbar">
        {!sidebar ? (
        <Link to ='#'>
        <FaIcons.FaBars onClick = {showSidebar}/>
        </Link>): 
         <Link to ='#'>
         < AiIcons.AiOutlineClose onClick = {showSidebar}/>
         </Link>
}
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
            {/* <li className="nalbar-toggle">
                <Link to='#' className='menu-bars'>
                    < AiIcons.AiOutlineClose/>

                </Link>
            </li> */}

            <li className='nav-text'>
                <Link to='/'>
                <AiIcons.AiFillHome value={{color:'FF5A5F'}} className="menu-icons" />
                <span className='menu-text-span'>Home</span>
                </Link>
            </li>

            <li className='nav-text'>
                <Link to='/'>
                <AiIcons.AiFillHome className="menu-icons"/>
                <span className='menu-text-span'>Posts</span>
                </Link>
            </li>

            <li className='nav-text'>
                <Link to='/'>
                <AiIcons.AiFillHome className="menu-icons"/>
                <span className='menu-text-span'>Services</span>
                </Link>
            </li>

            <li className='nav-text'>
                <Link to='/'>
                <AiIcons.AiFillHome className="menu-icons"/>
                <span className='menu-text-span'>Home</span>
                </Link>
            </li>
            <li className='nav-text'>
                <Link to='/'>
                <AiIcons.AiFillHome className="menu-icons"/>
                <span className='menu-text-span'>Contact</span>
                </Link>
            </li>
          
          

        </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Menu