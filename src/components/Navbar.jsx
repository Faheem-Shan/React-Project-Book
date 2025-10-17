// import React from 'react'
// import {TbHome} from "react-icons/tb"
// import {IoLibraryOutline} from "react-icons/io5"
// import {PiEnvelopeDuotone} from "react-icons/pi"
// import {NavLink} from 'react-router-dom'

// const Navbar = ({containerStyles,setmenuOpened}) => {

//     const navItems= [
//         {to: "/", label:"Home", icon:<TbHome />},
//         {to:"/shop",label:"Shop" , icon:<IoLibraryOutline />},
//         { to: "/contact", label: "Contact", icon: <PiEnvelopeDuotone /> },

//     ]

//   return(
//     <nav className={containerStyles}>
//         {navItems.map(({to,label,icon})=>(
//             <div key={label}>
//                 <NavLink onClick={()=>setmenuOpened(false)} to={to} className={({isActive})=> `${isActive ? "bg-white ring-1 ring-slate-900/10" :""} flexCenter gap-x-2 px-3 py-1.5 rounded-full` }>
//                     <span className="text-xl">{icon}</span>
//                     <span className="medium-16">{label}</span>
//                  </NavLink>
//              </div>
//         ))}
   
//     </nav>
//   )
// }

// export default Navbar;


// import React from 'react';
// import { TbHome } from 'react-icons/tb';
// import { IoLibraryOutline } from 'react-icons/io5';
// import { PiEnvelopeDuotone } from 'react-icons/pi';
// import { NavLink } from 'react-router-dom';

// const Navbar = ({ containerStyles, setMenuOpened }) => {
//   const navItems = [
//     { to: '/', label: 'Home', icon: <TbHome /> },
//     { to: '/shop', label: 'Shop', icon: <IoLibraryOutline /> },
//     { to: '/contact', label: 'Contact', icon: <PiEnvelopeDuotone /> },
//   ];

//   return (
//     <nav className={containerStyles}>
//       {navItems.map(({ to, label, icon }) => (
//         <NavLink
//           key={label}
//           to={to}
//           onClick={() => setMenuOpened && setMenuOpened(false)}
//           className={({ isActive }) =>
//             `${isActive ? 'bg-white ring-1 ring-gray-200' : ''} flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors`
//           }
//         >
//           <span className="text-lg">{icon}</span>
//           <span className="text-sm font-medium">{label}</span>
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbHome } from 'react-icons/tb';
import { IoLibraryOutline } from 'react-icons/io5';
import { PiEnvelopeDuotone } from 'react-icons/pi';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        
        {/* ---------- Left Section: Logo ---------- */}
        <div className="flex items-center gap-2">
          <img src="/book-icon.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-gray-800">
            Bookl<span className="text-purple-500">.</span>
          </h1>
        </div>

        {/* ---------- Middle Section: Navigation Links ---------- */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? 'text-purple-600 font-semibold' : 'text-gray-700'} flex items-center gap-1 hover:text-purple-600`
            }
          >
            <TbHome className="text-lg" /> Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `${isActive ? 'text-purple-600 font-semibold' : 'text-gray-700'} flex items-center gap-1 hover:text-purple-600`
            }
          >
            <IoLibraryOutline className="text-lg" /> Shop
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? 'text-purple-600 font-semibold' : 'text-gray-700'} flex items-center gap-1 hover:text-purple-600`
            }
          >
            <PiEnvelopeDuotone className="text-lg" /> Contact
          </NavLink>
        </nav>

        {/* ---------- Right Section: Search + Icons ---------- */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search books..."
              className="pl-9 pr-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          {/* Wishlist */}
          <button className="text-gray-700 hover:text-purple-600">
            <FaRegHeart className="text-xl" />
          </button>

          {/* Cart */}
          <button className="text-gray-700 hover:text-purple-600">
            <FaShoppingCart className="text-xl" />
          </button>

          {/* Login */}
          <button className="text-gray-700 hover:text-purple-600 flex items-center gap-1">
            <BiUser className="text-xl" />
            <span className="hidden sm:inline text-sm font-medium">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
