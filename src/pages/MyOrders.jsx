// import React, { useEffect, useState, useOutletContext } from 'react';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const { userName } = useOutletContext();

//   useEffect(() => {
//     fetch('http://localhost:3000/orders')
//       .then((res) => res.json())
//       .then((data) => setOrders(data));
//   }, []);

//   return (
//     <section className="max-padd-container py-12 bg-gray-100">
//       <h2 className="text-2xl font-bold mb-6 text-center">My Orders List, {userName}</h2>
//       {orders.length === 0 ? (
//         <p className="text-center">No orders yet. <a href="/shop" className="text-blue-500 hover:underline">Start shopping</a>.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
//               <p>Payment Status: {order.status === 'Processing' ? 'Pending' : 'Done'}</p>
//               <p>Method: {order.paymentMethod}</p>
//               <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
//               <p>Amount: ₹{order.total.toFixed(2)}</p>
//               <p>Status: <span className="text-green-500">{order.status}</span></p>
//               <button className="mt-2 bg-purple-500 text-white py-1 px-2 rounded-md hover:bg-purple-600 transition">Track Order</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState, useOutletContext } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  // We don't need userName for filtering, but keep it for the title
  const { userName } = useOutletContext();

  useEffect(() => {
    // 1. Get user ID from localStorage safely
    const userId = JSON.parse(localStorage.getItem('user'))?.id;

    // 2. Fetch all orders and filter them by the current user's ID
    fetch('http://localhost:3000/orders')
      .then((res) => res.json())
      .then((data) => {
        // Filtering logic from the "new code" is correct
        const userOrders = data.filter((order) => order.userId === userId);
        setOrders(userOrders.reverse()); // Show newest orders first
      })
      .catch(error => console.error("Failed to fetch orders:", error));
  }, []);

  return (
    <section className="max-padd-container py-12 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">My Orders List, {userName}</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our collection of stylish clothing and footwear made for comfort, quality, and everyday confidence.
      </p>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven't placed any orders yet. <a href="/shop" className="text-blue-600 hover:underline">Start shopping</a>.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              {/* -------------------- 1. Order Items (Visual Row) -------------------- */}
              <div className="flex flex-row overflow-x-auto pb-2 border-b border-gray-200 gap-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex-shrink-0 w-48 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-700">Price: <span className="font-semibold">₹{item.offerPrice.toFixed(2)}</span></p>
                      <p className="text-xs text-gray-700">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* -------------------- 2. Order Details and Status -------------------- */}
              <div className="mt-4 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="space-y-1">
                  <p>Order ID: <span className="font-mono text-xs text-gray-500">{order.id}</span></p>
                  <p>Payment Status: <span className="font-semibold text-green-700">Done</span> | Method: <span className="capitalize">{order.paymentMethod.replace(' on Delivery', '').toLowerCase()}</span></p>
                  <p>Date: <span className="font-semibold">{new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span> | Amount: <span className="font-bold text-lg">₹{order.total.toFixed(2)}</span></p>
                </div>

                <div className="mt-3 md:mt-0 flex items-center gap-3">
                  <p className="font-semibold text-sm">
                    Status: <span className={`font-bold ${order.status === 'Processing' ? 'text-orange-500' : 'text-green-600'}`}>
                      {order.status}
                    </span>
                  </p>
                  <button className="bg-purple-600 text-white py-2 px-4 rounded-full text-xs hover:bg-purple-700 transition shadow-md">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyOrders;