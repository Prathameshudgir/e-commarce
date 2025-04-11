// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import BakeryProduct from "../assets/bakeryproducts.jpg";

// const cakes = [
  
//   { id: 1, name: "Chocolate Cake", price: "₹250", weight: "500g", flavor: "Chocolate", image:"https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4a033c0-6dfa-4743-a740-856695740133.png" },
//   { id: 2, name: "Vanilla Cake", price: "₹200", weight: "500g", flavor: "Vanilla", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0f8b9d25-653c-4ab9-b37a-d92ea0da2b5e.png" },
//   { id: 3, name: "Strawberry Cake", price: "₹220", weight: "500g", flavor: "Strawberry", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8c0b733-8ea3-404f-ab31-10df7fa18084.png" },
//     { id: 4, name: "Butterscotch Cake", price: "₹230", weight: "500g", flavor: "Butterscotch", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b0ab7f0-a9e6-4303-bc10-6c3f71f06ced.png" },
//      { id: 5, name: "Rasmalai Cake", price: "₹240", weight: "500g", flavor: "Rasmalai", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Rasmalai-Cake.webp" },
//      { id: 6, name: "Fruit Cake", price: "₹300", weight: "500g", flavor: "Fruit", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Fruit-Cake.webp" },
//      { id: 7, name: " Pineapple Cake", price: "₹290", weight: "500g", flavor: "Pineapple",image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Pineapple-Cake.webp" },
//      { id: 8, name: "Coffee Cake", price: "₹400", weight: "500g", flavor: "Coffee", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Coffee-Cake.webp" },
//      { id: 9, name: "Cheesecake", price: "₹500", weight: "500g", flavor: "Cheese", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Cheesecake.webp"},
//      { id: 10, name: "Ferrero Rocher Cake", price: "₹450", weight: "500g", flavor: "Ferrero Rocher", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Ferrero-Rocher-Cake.webp" }
// ];

// const ProductPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();

//   if (category !== "bakery") {
//     return <div className="text-center mt-10 text-xl text-red-600">No products found for this category.</div>;
//   }

//   return (
//     <div className="pt-24 max-w-5xl mx-auto text-center">
//       {/* Back Button */}
//       <div className="flex items-center mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium"
//         >
//           ⬅ 
//         </button>
//       </div>

//       <h2 className="text-4xl font-bold text-orange-600 mb-6">Cakes</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
//         {cakes.map((cake) => (
//           <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl">
//             <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
//             <h3 className="mt-4 text-xl font-semibold">{cake.name}</h3>
//             <p className="text-gray-600">Flavor: {cake.flavor}</p>
//             <p className="text-gray-600">Weight: {cake.weight}</p>
//             <p className="text-2xl font-bold text-gray-900 mt-2">{cake.price}</p>
//             <button
//               onClick={() => navigate(`/cake/${cake.id}`)}
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
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const bakeryProducts = [
  
  { id: 1, name: "Chocolate Cake", price: "₹250", weight: "500g", flavor: "Chocolate", image:"https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4a033c0-6dfa-4743-a740-856695740133.png" },
  { id: 2, name: "Vanilla Cake", price: "₹200", weight: "500g", flavor: "Vanilla", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0f8b9d25-653c-4ab9-b37a-d92ea0da2b5e.png" },
  { id: 3, name: "Strawberry Cake", price: "₹220", weight: "500g", flavor: "Strawberry", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8c0b733-8ea3-404f-ab31-10df7fa18084.png" },
    { id: 4, name: "Butterscotch Cake", price: "₹230", weight: "500g", flavor: "Butterscotch", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b0ab7f0-a9e6-4303-bc10-6c3f71f06ced.png" },
     { id: 5, name: "Rasmalai Cake", price: "₹240", weight: "500g", flavor: "Rasmalai", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Rasmalai-Cake.webp" },
     { id: 6, name: "Fruit Cake", price: "₹300", weight: "500g", flavor: "Fruit", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Fruit-Cake.webp" },
     { id: 7, name: " Pineapple Cake", price: "₹290", weight: "500g", flavor: "Pineapple",image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Pineapple-Cake.webp" },
     { id: 8, name: "Coffee Cake", price: "₹400", weight: "500g", flavor: "Coffee", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Coffee-Cake.webp" },
     { id: 9, name: "Cheesecake", price: "₹500", weight: "500g", flavor: "Cheese", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Cheesecake.webp"},
     { id: 10, name: "Ferrero Rocher Cake", price: "₹450", weight: "500g", flavor: "Ferrero Rocher", image: "https://www.indiaspedia.com/wp-content/uploads/2024/11/Ferrero-Rocher-Cake.webp" }

];

const masalaProducts = [
  { id: 11, name: "Sabji Masala", price: "₹150", weight: "500g", flavor: "Chocolate", image:"https://m.media-amazon.com/images/I/71OgisLCmJL._SY741_.jpg" },
  { id: 12, name: "Garam Masala", price: "₹200", weight: "500g", flavor: "Vanilla", image: "https://m.media-amazon.com/images/I/71sPgGyrmCL._SX679_.jpg" },
  { id: 13, name: "Shahi Biryani Masala ", price: "₹220", weight: "500g", flavor: "Strawberry", image: "https://m.media-amazon.com/images/I/71wK9rUJQCL._SY741_.jpg" },
    { id: 14, name: "Kitchen King Mixed Masala", price: "₹230", weight: "500g", flavor: "Butterscotch", image: "https://m.media-amazon.com/images/I/61XATWnz2fL._SY741_.jpg" },
     { id: 15, name: "Chat Masala", price: "₹240", weight: "500g", flavor: "Rasmalai", image: "https://m.media-amazon.com/images/I/51uK3chXq+L._SX679_.jpg" },
     { id: 16, name: "Shahi Paneer Masala", price: "₹300", weight: "500g", flavor: "Fruit", image: "https://m.media-amazon.com/images/I/71u5eIB+gML._SL1500_.jpg" },
     { id: 17, name: " Pav Bhaji Masala", price: "₹290", weight: "500g", flavor: "Pineapple",image: "https://m.media-amazon.com/images/I/61S3ruJG7ZL._SY741_.jpg" },
     { id: 18, name: "Meat Masala", price: "₹400", weight: "500g", flavor: "Coffee", image: "https://m.media-amazon.com/images/I/61phnc-A-2L._SX679_.jpg" },
     { id: 19, name: "Chana Masala", price: "₹500", weight: "500g", flavor: "Cheese", image: "https://m.media-amazon.com/images/I/71tXYYscTQL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg"},
     { id: 20, name: "Chhole Masala", price: "₹450", weight: "500g", flavor: "Ferrero Rocher", image: "https://m.media-amazon.com/images/I/81GxkRow-lL._SY741_PIbundle-4,TopRight,0,0_SX515SY741SH20_.jpg" }
];

const jewelleryProducts = [
  { id: 11, name: "Sabji Masala", price: "₹150", weight: "500g", flavor: "Chocolate", image:"https://m.media-amazon.com/images/I/71OgisLCmJL._SY741_.jpg" },
  { id: 12, name: "Garam Masala", price: "₹200", weight: "500g", flavor: "Vanilla", image: "https://m.media-amazon.com/images/I/71sPgGyrmCL._SX679_.jpg" },
  { id: 13, name: "Shahi Biryani Masala ", price: "₹220", weight: "500g", flavor: "Strawberry", image: "https://m.media-amazon.com/images/I/71wK9rUJQCL._SY741_.jpg" },
    { id: 14, name: "Kitchen King Mixed Masala", price: "₹230", weight: "500g", flavor: "Butterscotch", image: "https://m.media-amazon.com/images/I/61XATWnz2fL._SY741_.jpg" },
     { id: 15, name: "Chat Masala", price: "₹240", weight: "500g", flavor: "Rasmalai", image: "https://m.media-amazon.com/images/I/51uK3chXq+L._SX679_.jpg" },
     { id: 16, name: "Shahi Paneer Masala", price: "₹300", weight: "500g", flavor: "Fruit", image: "https://m.media-amazon.com/images/I/71u5eIB+gML._SL1500_.jpg" },
     { id: 17, name: " Pav Bhaji Masala", price: "₹290", weight: "500g", flavor: "Pineapple",image: "https://m.media-amazon.com/images/I/61S3ruJG7ZL._SY741_.jpg" },
     { id: 18, name: "Meat Masala", price: "₹400", weight: "500g", flavor: "Coffee", image: "https://m.media-amazon.com/images/I/61phnc-A-2L._SX679_.jpg" },
     { id: 19, name: "Chana Masala", price: "₹500", weight: "500g", flavor: "Cheese", image: "https://m.media-amazon.com/images/I/71tXYYscTQL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg"},
     { id: 20, name: "Chhole Masala", price: "₹450", weight: "500g", flavor: "Ferrero Rocher", image: "https://m.media-amazon.com/images/I/81GxkRow-lL._SY741_PIbundle-4,TopRight,0,0_SX515SY741SH20_.jpg" }
];



const ProductPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  let products = [];
  let categoryTitle = "";

  if (category === "bakery") {
    products = bakeryProducts;
    categoryTitle = "Cakes";
  }
   else if (category === "masala") {
    products = masalaProducts;
    categoryTitle = "Masala Products";
} 
else if(category === "jewellery") {
    products = jewelleryProducts;
    categoryTitle = "jewellery Products";
}

else {
    return <div className="text-center mt-10 text-xl text-red-600">No products found for this category.</div>;
  }

  return (
    <div className="pt-24 max-w-5xl mx-auto text-center">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-medium">
          ⬅ Back
        </button>
      </div>

      <h2 className="text-4xl font-bold text-orange-600 mb-6">{categoryTitle}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">Weight: {product.weight}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{product.price}</p>
            {/* <button
              onClick={() => navigate(`/${category}/${product.id}`)}
              className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Buy Now
            </button> */}

{/* <button
  onClick={() => navigate(`/cake/${product.id}`, { state: { product } })}
  className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
>
  Buy Now
</button> */}
<button
  onClick={() => navigate(`/${category}/${product.id}`, { state: { product } })}
  className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
>
  Buy Now
</button>



          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

