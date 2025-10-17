// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import CategoryShop from './pages/CategoryShop';
// import ProductDetails from './pages/ProductDetails';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import Login from './components/Login';
// import Cart from './pages/Cart';
// import AddressForm from './pages/AddressForm';
// import MyOrders from './pages/MyOrders';
// import Signup from './pages/Signup';
// import Wishlist from './pages/Wishlist';
// import Payment from './pages/Payment';
// import ProtectedRoute from './components/ProtectedRoute';


// const App = () => {
//   const location = useLocation();
//   const showFooter = location.pathname === '/';
//   return (
//     <main>
//       <Header />
//       <Toaster position='bottom-right' />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/shop/:category" element={<CategoryShop />} />
//         <Route path="/shop/:category/:id" element={<ProductDetails />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/wishlist" element={<Wishlist />} />

//         {/* Protected User Routes (FIX: Uncommented and correctly structured) */}
//         <Route element={<ProtectedRoute allowedRoles={['user']} />}>
//           <Route path="/home" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/address" element={<AddressForm />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/my-orders" element={<MyOrders />} />

//         </Route>


//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       { showFooter && <Footer /> }
//     </main >
//   )
// }

// export default App;

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// FIX 1: Ensure you are importing the correct component name (assuming it's 'Header')
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CategoryShop from './pages/CategoryShop';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Cart from './pages/Cart';
import AddressForm from './pages/AddressForm';
import MyOrders from './pages/MyOrders';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import Payment from './pages/Payment';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  const location = useLocation();

  // Good practice: Define paths where the footer should be visible
  // Only showing on Home (/) for example, but you can add more if needed
  const showFooter = location.pathname === '/';

  return (
    <main className="min-h-screen flex flex-col"> {/* Added flex-col for sticky footer */}
      <Header /> {/* Use the correct component */}
      <Toaster position='bottom-right' toastOptions={{ duration: 3000 }} />

      <div className="flex-1"> {/* Ensures content takes up available space */}
        <Routes>
          {/* -------------------- PUBLIC ROUTES -------------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<CategoryShop />} />
          <Route path="/shop/:category/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* NOTE: Removed public /cart and /wishlist */}

          {/* -------------------- PROTECTED USER ROUTES -------------------- */}
          {/* All pages that require a logged-in user and context data go here */}
          <Route element={<ProtectedRoute allowedRoles={['user']} />}>
            {/* <Route path="/home" element={<Home />} /> is redundant, use path="/" */}
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<AddressForm />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/my-orders" element={<MyOrders />} />
          </Route>

          {/* -------------------- PROTECTED ADMIN ROUTES (Optional) -------------------- */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<div>Admin Dashboard</div>} />
          </Route>

          {/* -------------------- CATCH-ALL ROUTE -------------------- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {showFooter && <Footer />}
    </main >
  )
}

export default App;