// // import React from 'react'

// // const Shop = () => {
// //   return (
// //     <div>Shop</div>
// //   )
// // }

// // export default Shop


// import React, { useState } from 'react';
// import { dummyBooks as books } from '../assets/data';
// import Item from '../components/Item';

// const Shop = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All');
//   const [sortOption, setSortOption] = useState('price-asc');

//   const filteredBooks = books.filter((book) =>
//     (categoryFilter === 'All' || book.category === categoryFilter) &&
//     (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//      book.author.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const sortedBooks = [...filteredBooks].sort((a, b) => {
//     if (sortOption === 'price-asc') return a.price - b.price;
//     if (sortOption === 'price-desc') return b.price - a.price;
//     return 0;
//   });

//   const categories = ['All', ...new Set(books.map((book) => book.category))];

//   return (
//     <section className="max-padd-container py-12 bg-gray-100">
//       <div className="flex flex-col gap-6">
//         <div className="flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Search books..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 w-full sm:w-1/2"
//           />
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 w-full sm:w-1/3"
//           >
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//             className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 w-full sm:w-1/4"
//           >
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {sortedBooks.map((book) => (
//             <Item key={book.id} book={book} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shop;

import React, { useState } from 'react';
import { dummyBooks as books } from '../assets/data';
import Item from '../components/Item';

const Shop = () => {
  // State to manage user input for filtering and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOption, setSortOption] = useState('price-asc');

  // Step 1: Filter books based on category and search term
  const filteredBooks = books.filter((book) =>
    // Check category match (or 'All') AND
    (categoryFilter === 'All' || book.category === categoryFilter) &&
    // Check if search term matches title OR author (case-insensitive)
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Step 2: Sort the filtered books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    // Sort by ascending price
    if (sortOption === 'price-asc') return a.price - b.price;
    // Sort by descending price
    if (sortOption === 'price-desc') return b.price - a.price;
    return 0;
  });

  // Step 3: Dynamically generate unique category options for the dropdown
  const categories = ['All', ...new Set(books.map((book) => book.category))];

  return (
    <section className="max-padd-container py-12 bg-gray-100">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 w-full sm:w-1/2"
          />
          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 w-full sm:w-1/3"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {/* Sort Option */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 w-full sm:w-1/4"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            <Item key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;

// import React, { useContext, useEffect, useState } from 'react';
// import { CartContext } from '../Context/CartContext';
// import Item from '../components/Item';
// import Categories from '../components/Categories';
// import Title from '../components/Title';

// const Shop = () => {
//     // 1. Data Access: Get the main 'books' array from the central CartContext
//     const { books } = useContext(CartContext);
    
//     // 2. State Management for Filters and Sorting
//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortBy, setSortBy] = useState('price-asc');
//     const [filteredBooks, setFilteredBooks] = useState([]);

//     // 3. Logic Engine: Filters and sorts the books whenever user input changes
//     useEffect(() => {
//         // Start with a copy of the main books array to avoid modifying the original
//         let result = [...books];
        
//         // --- A. Filtering Logic (Search) ---
//         if (searchTerm) {
//             // Filter the books whose name (title) includes the search term (case-insensitive)
//             result = result.filter((book) =>
//                 book.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//         }
        
//         // --- B. Sorting Logic ---
//         result.sort((a, b) => {
//             // Sort by 'offerPrice' (the displayed price) ascending or descending
//             if (sortBy === 'price-asc') return a.offerPrice - b.offerPrice;
//             if (sortBy === 'price-desc') return b.offerPrice - a.offerPrice;
//             return 0; // Keep original order if sort option is not price-based
//         });

//         // Update the state with the final, filtered, and sorted list
//         setFilteredBooks(result);
//     }, [searchTerm, sortBy, books]); // Dependencies: Reruns when any of these change

//     // 4. Side Effect: Scroll to top when the component mounts
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <section className="max-padd-container py-12 bg-gray-50">
//             {/* Page Title and Main Categories Navigation */}
//             <Title text="Shop" />
//             <Categories />
            
//             <div className="mb-6 flex flex-col sm:flex-row gap-4">
                
//                 {/* Search Input: Updates 'searchTerm' state */}
//                 <input
//                     type="text"
//                     placeholder="Search books..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full sm:w-64 p-2 border rounded-md focus:border-blue-500 focus:ring-blue-200"
//                 />
                
//                 {/* Sort Selector: Updates 'sortBy' state */}
//                 <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="w-full sm:w-40 p-2 border rounded-md focus:border-blue-500 focus:ring-blue-200"
//                 >
//                     <option value="price-asc">Price: Low to High</option>
//                     <option value="price-desc">Price: High to Low</option>
//                 </select>
//             </div>
            
//             {/* Products Grid: Displays the filtered and sorted books */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {/* Map the final, processed array to render individual Item components */}
//                 {filteredBooks.map((book) => (
//                     <Item key={book.id} book={book} />
//                 ))}
//             </div>
            
//             {/* User Feedback: Show message if no books match the filters */}
//             {filteredBooks.length === 0 && (
//                 <p className="text-center text-gray-600 mt-8">No books found matching your criteria.</p>
//             )}
//         </section>
//     );
// };

// export default Shop;