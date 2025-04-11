// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const bakeryProducts = [
//   { id: 1, name: "Chocolate Cake", price: "₹250", weight: "500g", flavor: "Chocolate", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4a033c0-6dfa-4743-a740-856695740133.png" },
//   { id: 2, name: "Vanilla Cake", price: "₹200", weight: "500g", flavor: "Vanilla", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0f8b9d25-653c-4ab9-b37a-d92ea0da2b5e.png" }
// ];

// const masalaProducts = [
//   { id: 1, name: "Garam Masala", price: "₹150", weight: "250g", image: "https://www.example.com/garam-masala.jpg" },
//   { id: 2, name: "Chaat Masala", price: "₹100", weight: "250g", image: "https://www.example.com/chaat-masala.jpg" }
// ];

// const ProductPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();

//   let products = [];
//   let categoryTitle = "";

//   if (category === "bakery") {
//     products = bakeryProducts;
//     categoryTitle = "Cakes";
//   } else if (category === "masala") {
//     products = masalaProducts;
//     categoryTitle = "Masala Products";
//   } else {
//     return <div className="text-center mt-10 text-xl text-red-600">No products found for this category.</div>;
//   }

//   return (
//     <div className="pt-24 max-w-5xl mx-auto text-center">
//       <div className="flex items-center mb-6">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium">
//           ⬅ Back
//         </button>
//       </div>

//       <h2 className="text-4xl font-bold text-orange-600 mb-6">{categoryTitle}</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
//             <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-600">Weight: {product.weight}</p>
//             <p className="text-2xl font-bold text-gray-900 mt-2">{product.price}</p>
//             <button
//               onClick={() => navigate(`/${category}/${product.id}`)}
//               className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
//             >
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
