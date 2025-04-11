// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CartPage = ({ cart = [], setCart }) => {
//   const navigate = useNavigate();

//   const removeFromCart = (id) => {
//     setCart(cart.filter((cake) => cake.id !== id));
//   };

//   return (
//     <div className="pt-24 max-w-4xl mx-auto text-center">
//       {/* Back Button with Better Styling */}
//       <div className="flex items-center mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium"
//         >
//           ⬅ Back to Shop
//         </button>
//       </div>

//       <h2 className="text-4xl font-bold text-orange-600">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-700 mt-4">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
//           {cart.map((cake) => (
//             <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4">
//               <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
//               <h3 className="mt-4 text-xl font-semibold">{cake.name}</h3>
//               <p className="text-gray-700">Flavor: {cake.flavor}</p>
//               <p className="text-gray-700">Weight: {cake.weight}</p>
//               <p className="text-2xl font-bold text-gray-900 mt-2">{cake.price}</p>
//               <button
//                 onClick={() => removeFromCart(cake.id)}
//                 className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CartPage = ({ cart = [], setCart }) => {
//   const navigate = useNavigate();

//   const removeFromCart = (id) => {
//     setCart(cart.filter((cake) => cake.id !== id));
//   };

//   const handleBuyNow = (cake) => {
//     alert(`Thank you for purchasing ${cake.name}! 🎉`);
//     setCart(cart.filter((item) => item.id !== cake.id)); // Remove the purchased item from cart
//     navigate("/"); // Redirect to shop or checkout page
//   };

//   return (
//     <div className="pt-24 max-w-4xl mx-auto text-center">
//       {/* Back Button */}
//       <div className="flex items-center mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium"
//         >
//           ⬅ Back to Shop
//         </button>
//       </div>

//       <h2 className="text-4xl font-bold text-orange-600">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-700 mt-4">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
//           {cart.map((cake) => (
//             <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4">
//               <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
//               <h3 className="mt-4 text-xl font-semibold">{cake.name}</h3>
//               <p className="text-gray-700">Flavor: {cake.flavor}</p>
//               <p className="text-gray-700">Weight: {cake.weight}</p>
//               <p className="text-2xl font-bold text-gray-900 mt-2">{cake.price}</p>

//               <div className="mt-4 flex flex-col sm:flex-row gap-2">
//                 <button
//                   onClick={() => removeFromCart(cake.id)}
//                   className="px-4 py-2 ml-16 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   Remove
//                 </button>

//                 <button
//                   onClick={() => handleBuyNow(cake)}
//                   className="px-4 py-2 ml-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 >
//                   Buy Now 💳
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CartPage = ({ cart = [], setCart }) => {
//   const navigate = useNavigate();

//   const removeFromCart = (id) => {
//     setCart(cart.filter((cake) => cake.id !== id));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     setCart(cart.map((cake) => (cake.id === id ? { ...cake, quantity: newQuantity } : cake)));
//   };

//   const handleBuyNow = (cake) => {
//     alert(`Thank you for purchasing ${cake.quantity}x ${cake.name}! 🎉`);
//     setCart(cart.filter((item) => item.id !== cake.id)); // Remove the purchased item from cart
//     navigate("/");
//   };

//   return (
//     <div className="pt-24 max-w-4xl mx-auto text-center">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium"
//       >
//         ⬅ Back to Shop
//       </button>

//       <h2 className="text-4xl font-bold text-orange-600">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-700 mt-4">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
//           {cart.map((cake) => (
//             <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4">
//               <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
//               <h3 className="mt-4 text-xl font-semibold">{cake.name}</h3>
//               <p className="text-gray-700">Flavor: {cake.flavor}</p>
//               <p className="text-gray-700">Weight: {cake.weight}</p>
//               <p className="text-2xl font-bold text-gray-900 mt-2">₹{cake.price}</p>

//               {/* ✅ Quantity Selector in Cart */}
//               <div className="flex items-center justify-center gap-4 mt-2">
//                 <button
//                   onClick={() => updateQuantity(cake.id, Math.max(1, cake.quantity - 1))}
//                   className="px-3 py-1 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
//                 >
//                   ➖
//                 </button>
//                 <span className="text-xl font-bold">{cake.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(cake.id, cake.quantity + 1)}
//                   className="px-3 py-1 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
//                 >
//                   ➕
//                 </button>
//               </div>

//               <div className="mt-4 flex flex-col sm:flex-row gap-2">
//                 <button
//                   onClick={() => removeFromCart(cake.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   Remove
//                 </button>

//                 <button
//                   onClick={() => handleBuyNow(cake)}
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 >
//                   Buy Now 💳
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart = [], setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart(cart.filter((cake) => cake.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map((cake) => (cake.id === id ? { ...cake, quantity: newQuantity } : cake)));
  };

  // const handleBuyNow = (cake) => {
  //   alert(`Thank you for purchasing ${cake.quantity}x ${cake.name}! 🎉`);
  //   setCart(cart.filter((item) => item.id !== cake.id));
  //   navigate("/");
  // };

  // const handleBuyNow = (cake) => {
  //   navigate(
  //     `/checkout?name=${encodeURIComponent(cake.name)}&price=${cake.price * cake.quantity}&quantity=${cake.quantity}`
  //   );
  // };

  const handleBuyNow = (cake) => {
    navigate(
      `/checkout?name=${encodeURIComponent(cake.name)}&price=${cake.price * cake.quantity}&quantity=${cake.quantity}&image=${encodeURIComponent(cake.image)}`
    );
  };
  
  

  // ✅ Calculate Grand Total
  const grandTotal = cart.reduce((total, cake) => total + cake.price * cake.quantity, 0);

  return (
    <div className="pt-24 max-w-4xl mx-auto text-center">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium"
      >
        ⬅ Back to Shop
      </button>

      <h2 className="text-4xl font-bold text-orange-600">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-700 mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cart.map((cake) => (
              <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4">
                <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
                <h3 className="mt-4 text-xl font-semibold">{cake.name}</h3>
                <p className="text-gray-700">Flavor: {cake.flavor}</p>
                <p className="text-gray-700">Weight: {cake.weight}</p>
                <p className="text-lg font-bold text-gray-900">Price: ₹{cake.price}</p>
                <p className="text-lg font-bold text-gray-900">Total: ₹{cake.price * cake.quantity}</p>

                {/* ✅ Quantity Selector */}
                <div className="flex items-center justify-center gap-4 mt-2">
                  <button
                    onClick={() => updateQuantity(cake.id, Math.max(1, cake.quantity - 1))}
                    className="px-3 py-1 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
                  >
                    ➖
                  </button>
                  <span className="text-xl font-bold">{cake.quantity}</span>
                  <button
                    onClick={() => updateQuantity(cake.id, cake.quantity + 1)}
                    className="px-3 py-1 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
                  >
                    ➕
                  </button>
                </div>

                <div className="mt-4 flex flex-col pl-20 sm:flex-row gap-2">
                  <button
                    onClick={() => removeFromCart(cake.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => handleBuyNow(cake)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Buy Now 💳
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Grand Total */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900">Grand Total: ₹{grandTotal}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
