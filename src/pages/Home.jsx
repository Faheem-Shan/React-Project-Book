// import React from 'react'
// import Hero from '../components/Hero'
// import Categories from '../components/Categories'

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <Categories />
//     </div>
//   )
// }

// export default Home


import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import Item from '../components/Item';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Title from '../components/Title';

const Home = () => {
  const { books } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50">
      <Hero />
      <div className="max-padd-container py-12">
        <Categories />
        <Title text="Featured Books" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <Item key={book.id} book={book} fromHero />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;