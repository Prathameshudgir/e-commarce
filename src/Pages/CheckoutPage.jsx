// import React from "react";
// import { useLocation, useNavigate, } from "react-router-dom";

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);

//   const name = params.get("name");
//   const price = params.get("price");
//   const quantity = params.get("quantity");

  

//   return (
//     <div className="pt-24 max-w-4xl mx-auto text-center">
//       <h2 className="text-4xl font-bold text-orange-600">Review Your Order</h2>

//       <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <p className="text-gray-700">Quantity: {quantity}</p>
//         <p className="text-2xl font-bold text-gray-900">Total Price: ₹{price}</p>

//         <button
//           onClick={() => alert("Order placed successfully! 🎉")}
//           className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Confirm Order ✅
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);

//   const name = params.get("name");
//   const price = params.get("price");
//   const quantity = params.get("quantity");

//   return (
//     <div className="pt-24 max-w-4xl mx-auto text-center">
//       <h2 className="text-4xl font-bold text-orange-600">Review Your Order</h2>

//       <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <p className="text-gray-700">Quantity: {quantity}</p>
//         <p className="text-2xl font-bold text-gray-900">Total Price: ₹{price}</p>

//         <div className="mt-4 flex justify-center gap-4">
//           {/* ✅ Confirm Order Button */}
//           <button
//             onClick={() => {
//               alert("Order placed successfully! 🎉");
//               navigate("/"); // Redirect to home or another page
//             }}
//             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             Confirm Order ✅
//           </button>

//           {/* ✅ Cancel Order Button */}
//           <button
//             onClick={() => navigate("/cart")}
//             className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
//           >
//             Cancel Order ❌
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);

//   const name = params.get("name");
//   const price = params.get("price");
//   const quantity = params.get("quantity");
//   const image = params.get("image"); // ✅ Get image URL

//   return (
//     <div className="pt-24 max-w-4xl mx-auto text-center">
//       <h2 className="text-4xl font-bold text-orange-600">Review Your Order</h2>

//       <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
//         {/* ✅ Display Product Image */}
//         {image && (
//           <img
//             src={image}
//             alt={name}
//             className="w-40 h-40 mx-auto object-cover rounded-md"
//           />
//         )}

//         <h3 className="text-xl font-semibold mt-4">{name}</h3>
//         <p className="text-gray-700">Quantity: {quantity}</p>
//         <p className="text-2xl font-bold text-gray-900">Total Price: ₹{price}</p>

//         <div className="mt-4 flex justify-center gap-4">
//           {/* ✅ Confirm Order Button */}
//           <button
//             onClick={() => {
//               alert("Order placed successfully! 🎉");
//               navigate("/"); // Redirect to home
//             }}
//             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             Confirm Order ✅
//           </button>

//           {/* ✅ Cancel Order Button */}
//           <button
//             onClick={() => navigate("/cart")}
//             className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
//           >
//             Cancel Order ❌
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const name = params.get("name");
  const price = params.get("price");
  const quantity = params.get("quantity");
  const image = params.get("image"); // ✅ Get image URL

  return (
    <div className="pt-24 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-orange-600">Review Your Order</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        {/* ✅ Display Product Image */}
        {image && (
          <img
            src={image}
            alt={name}
            className="w-40 h-40 mx-auto object-cover rounded-md"
          />
        )}

        <h3 className="text-xl font-semibold mt-4">{name}</h3>
        <p className="text-gray-700">Quantity: {quantity}</p>
        <p className="text-2xl font-bold text-gray-900">Total Price: ₹{price}</p>

        <div className="mt-4 flex justify-center gap-4">
          {/* ✅ Confirm Order Button */}
          {/* <button
            onClick={() => {
              alert("Order placed successfully! 🎉");
              navigate("/"); // Redirect to home
            }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Confirm Order ✅
          </button> */}

<button
  onClick={() => {
    navigate(`/upid?name=${name}&price=${price}`);
  }}
  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
>
  Confirm Order ✅
</button>


          {/* ✅ Edit Order Button */}
          <button
            onClick={() => navigate("/cart")}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Edit Order ✏️
          </button>

          {/* ✅ Cancel Order Button */}
          <button
            onClick={() => navigate("/cart")}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Cancel Order ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
