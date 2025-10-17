// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logoImg from "../assets/images/logo.png";
// import userImg from "../assets/images/user.png";
// import { FaBars, FaBarsStaggered } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { RiUserLine } from "react-icons/ri";
// import Navbar from "./Navbar";
// import { AuthContext } from '../Context/AuthContext';
// import { CartContext } from '../Context/CartContext';

// const Header = () => {

//   const [menuOpened, setMenuOpened] = useState(false)
//   const [showSearch, setShowSearch] = useState(false)
//   const { user, logout } = useContext(AuthContext);
//   const { cart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   return (
//     <header className='top-0 left-0 right-0 max-padd-container flex justify-between items-center gap-4 py-2'>
//       {/* Logo Section */}
//       <div className="flex flex-1">
//         <Link to={'/'} className="bold-22 xl:bold-28 flex items-end gap-2">
//           <img src={logoImg} alt="Logo" className="h-9 w-auto hidden sm:block" />
//           <div className="sm:relative top-1.5">Bookl<span className="text-secondary">y.</span></div>
//         </Link>
//       </div>

//       {/* NAVBAR FOR MOBILE & DESKTOP*/}
//       <div className="flex-1 flex justify-center">
//         <Navbar setMenuOpened={setMenuOpened}
//           containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50" : "hidden lg:flex gap-x-5 xl:gap-x-7 medium-15 ring-1 ring-slate-900/15 rounded-full p-1 bg-primary"}`} />
//       </div>
//       <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">

//         {/* SearchBar */}
//         <div className='relative hidden xl:flex items-center sm:justify-between gap-x-4 sm:gap-x-8'>

//           {/* Toggle input */}
//           <div className={`bg-white ring-1 ring-slate-900/10 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${showSearch ? "w-[266px] opacity-100 px-4 py-2.5" : "w-0 opacity-0 p-0"}`}>
//             <input type='text' placeholder='Search...' className='bg-transparent w-full text-sm outline-none pr-10 placeholder:text-gray-400' />
//           </div>
//           {/* Toggle button */}
//           <div onClick={() => setShowSearch((prev) => !prev)} className="absolute right-0 bg-primary p-2.5 rounded-full cursor-pointer z-20"
//           >
//             <FaSearch className="text-xl" />
//           </div>
//         </div>

//         {/* MENU TOGGLE */}
//         <div className="lg:hidden">
//           {menuOpened ? (
//             <FaBarsStaggered onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
//           ) : (
//             <FaBars onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
//           )}
//         </div>
//         {/* CART */}
//         <Link to={'/cart'} className="flex relative">
//           <div className="bold-16">
//             Cart <span className="bg-secondary text-white text-[12px] font-semibold absolute top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md">{cart.length}</span>
//           </div>
//         </Link>
//         {/* USER PROFILE */}
//         <div className="group relative">
//           <div>
//             {user ? (
//               <div className='flex gap-2 items-center cursor-pointer rounded-full bg-white'>
//                 <img src={userImg} alt="userImg" className="h-11 w-11 rounded-full" />
//               </div>
//             ) : (
//               <Link to="/login" className="btn-light flexCenter gap-x-2">Login <RiUserLine className="text-xl" />
//               </Link>
//             )}
//           </div>
//           {/* DROPDOWN */}
//           {user && (<ul className="bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-10 hidden group-hover:flex flex-col medium-14 shadow-md z-50">
//             <li onClick={() => navigate('/my-orders')} className='p-2 rounded-md hover:bg-primary cursor-pointer'>Orders</li >
//             <li onClick={handleLogout} className='p-2 rounded-md hover:bg-primary cursor-pointer'>Logout</li >
//           </ul>)}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header;

// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logoImg from '../assets/images/logo.png';
// import userImg from '../assets/images/user.png';
// import { FaBars, FaBarsStaggered } from 'react-icons/fa6';
// import { FaSearch } from 'react-icons/fa';
// import { RiUserLine } from 'react-icons/ri';
// import { TbHeart, TbShoppingBag } from 'react-icons/tb'; 
// import Navbar from './Navbar';
// import { AuthContext } from '../Context/AuthContext';
// import { CartContext } from '../Context/CartContext';

// const Header = () => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const { user, logout } = useContext(AuthContext);
//   const { cart, wishlist } = useContext(CartContext); // Added wishlist
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter' && e.target.value.trim()) {
//       navigate(`/shop?search=${encodeURIComponent(e.target.value.trim())}`);
//       setShowSearch(false);
//     }
//   };

//   const toggleMenu = () => setMenuOpened((prev) => !prev); // Kept toggle function for clarity

//   return (
//     <header className="top-0 left-0 right-0 max-padd-container flex justify-between items-center py-3 bg-white shadow-md">
//       {/* Logo Section */}
//       <div className="flex-1">
//         <Link to="/" className="text-xl font-bold flex items-center gap-2">
//           <img src={logoImg} alt="Bookly Logo" className="h-8 w-auto hidden sm:block" />
//           <span className="relative top-0.5">Bookl<span className="text-blue-600">.</span></span>
//         </Link>
//       </div>

//       {/* NAVBAR FOR MOBILE & DESKTOP */}
//       <div className="flex-1 flex justify-center">
//         <Navbar
//           setMenuOpened={setMenuOpened}
//           containerStyles={`${menuOpened ? 'flex items-start flex-col gap-6 fixed top-16 right-6 p-5 bg-white rounded-lg shadow-lg w-48 ring-1 ring-gray-200 z-50' : 'hidden lg:flex gap-x-6 text-sm font-medium ring-1 ring-gray-200 rounded-full p-2 bg-gray-100'}`}
//         />
//       </div>

//       {/* Action Icons Section */}
//       <div className="flex-1 flex items-center justify-end gap-4">
        
//         {/* SearchBar */}
//         <div className="relative hidden xl:flex">
//           {/* Toggle input */}
//           <div className={`bg-white ring-1 ring-gray-200 rounded-full overflow-hidden transition-all duration-300 ${showSearch ? 'w-64 p-2 opacity-100' : 'w-0 p-0 opacity-0'}`}>
//             <input
//               type="text"
//               placeholder="Search books..."
//               className="w-full bg-transparent text-sm outline-none placeholder-gray-400"
//               onKeyPress={handleSearch}
//             />
//           </div>
//           {/* Toggle button */}
//           <button
//             onClick={() => setShowSearch((prev) => !prev)}
//             className="absolute right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
//           >
//             <FaSearch className="text-lg" />
//           </button>
//         </div>

//         {/* Wishlist */}
//         <Link to="/wishlist" className="hidden xl:flex relative hover:text-blue-600 transition-colors">
//           <TbHeart className="text-xl" />
//           {wishlist.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//               {wishlist.length}
//             </span>
//           )}
//         </Link>

//         {/* Menu Toggle */}
//         <button className="lg:hidden text-xl" onClick={toggleMenu}>
//           {menuOpened ? <FaBarsStaggered /> : <FaBars />}
//         </button>

//         {/* CART */}
//         <Link to="/cart" className="flex relative hover:text-blue-600 transition-colors">
//           <TbShoppingBag className="text-xl" />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>

//         {/* USER PROFILE */}
//         <div className="group relative">
//           {user ? (
//             <div className="flex items-center gap-2 cursor-pointer">
//               <img src={userImg} alt="User" className="h-8 w-8 rounded-full object-cover" />
//             </div>
//           ) : (
//             <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline">
//               Login <RiUserLine className="inline text-base" />
//             </Link>
//           )}
//           {/* DROPDOWN */}
//           {user && (
//             <ul className="absolute right-0 top-10 hidden group-hover:flex flex-col bg-white p-2 rounded-md shadow-md ring-1 ring-gray-200 z-50">
//               <li
//                 className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
//                 onClick={() => navigate('/my-orders')}
//               >
//                 Orders
//               </li>
//               <li
//                 className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import userImg from '../assets/images/user.png';
import { FaBars, FaBarsStaggered } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { TbHeart, TbShoppingBag } from 'react-icons/tb';
import Navbar from './Navbar';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { cart, wishlist } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      navigate(`/shop?search=${encodeURIComponent(e.target.value.trim())}`);
      setShowSearch(false);
    }
  };

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <header className="top-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-3 bg-white shadow-md">
      {/* Logo (Left Side) */}
      <div className="flex-shrink-0">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <img src={logoImg} alt="Bookly Logo" className="h-8 w-auto" />
          <span className="relative top-0.5">Bookl<span className="text-blue-600">.</span></span>
        </Link>
      </div>

      {/* Navigation (Center, Slightly Left-Shifted) */}
      <div className="flex-1 flex justify-center ml-[-2rem] lg:ml-0">
        <Navbar
          setMenuOpened={setMenuOpened}
          containerStyles={`${menuOpened ? 'flex items-start flex-col gap-4 fixed top-16 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-lg w-48 ring-1 ring-gray-200 z-50' : 'hidden lg:flex gap-x-6 text-sm font-medium'}`}
        />
      </div>

      {/* Action Icons (Right Side, Congested as Requested) */}
      <div className="flex-shrink-0 flex items-center gap-2">
        {/* Search */}
        <div className="relative">
          <div className={`bg-white ring-1 ring-gray-200 rounded-full overflow-hidden transition-all duration-300 ${showSearch ? 'w-48 p-2 opacity-100' : 'w-0 p-0 opacity-0'}`}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm outline-none placeholder-gray-400"
              onKeyPress={handleSearch}
              aria-label="Search books"
            />
          </div>
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
            aria-label="Toggle search"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>

        {/* Wishlist */}
        <Link to="/wishlist" className="relative hover:text-blue-600 transition-colors">
          <TbHeart className="text-xl" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
          <TbShoppingBag className="text-xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        {/* User/Login */}
        <div className="group relative">
          {user ? (
            <div className="flex items-center gap-1 cursor-pointer">
              <img src={userImg} alt="User" className="h-6 w-6 rounded-full object-cover" />
            </div>
          ) : (
            <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
              <RiUserLine className="text-base" /> Login
            </Link>
          )}
          {user && (
            <ul className="absolute right-0 top-8 hidden group-hover:flex flex-col bg-white p-2 rounded-md shadow-md ring-1 ring-gray-200 z-50">
              <li
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => navigate('/my-orders')}
              >
                Orders
              </li>
              <li
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-xl ml-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpened ? <FaBarsStaggered /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
