import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import slider images
import slide1 from "../assets/home.webp";
import slide2 from "../assets/home1.webp";
import slide3 from "../assets/home3.webp";

// Import product images
import BakeryProduct from "../assets/bakeryproducts.jpg";
import masala from "../assets/masala.webp";
import Homemadejewellery from "../assets/homemadeje.jpg";
import pickle from "../assets/SpicyPickle.png";
import thalipithbhajni from "../assets/thalipithbhajni.jpg";
import herbalproduct from "../assets/HerbalProduct.jpg";

const Home = () => {
  const navigate = useNavigate();
  const images = [slide1, slide2, slide3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Product categories with navigation
  const categories = [
    { id: "bakery", name: "Bakery Products", image: BakeryProduct },
    { id: "masala", name: "Masala", image: masala },
    { id: "jewellery", name: "Home Made Jewellery", image: Homemadejewellery },
    { id: "pickle", name: "Pickle", image: pickle },
    { id: "thalipith", name: "Thalipith Bhajni", image: thalipithbhajni },
    { id: "herbal", name: "Herbal Products", image: herbalproduct },
  ];

  return (
    <div className="pt-24 w-full text-center">
      <h1 className="text-4xl font-bold text-orange-600">Welcome to Gharguti Food</h1>
      <p className="mt-4 text-lg">Taste the tradition with every bite!</p>

      {/* Image Slider */}
      <div className="w-full max-w-screen-lg mx-auto mt-6 relative">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-96 object-cover rounded-lg transition-opacity duration-1000"
        />
      </div>

      {/* Product Categories */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
              <button
                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                onClick={() => navigate(`/products/${category.id}`)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Import slider images
// import slide1 from "../assets/home.webp";
// import slide2 from "../assets/home1.webp";
// import slide3 from "../assets/home3.webp";

// // Import product images
// import BakeryProduct from "../assets/bakeryproducts.jpg";
// import masala from "../assets/masala.webp";
// import Homemadejewellery from "../assets/homemadeje.jpg";
// import pickle from "../assets/SpicyPickle.png";
// import thalipithbhajni from "../assets/thalipithbhajni.jpg";
// import herbalproduct from "../assets/HerbalProduct.jpg";

// const Home = () => {
//   const navigate = useNavigate();
//   const images = [slide1, slide2, slide3];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);



//   const handleViewMore = (category) => {
//     navigate(`/products/${category.id}`, { state: category });
//   };
  

//   // Auto image slider logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Product categories with navigation
//   const categories = [
//     {
//       id: "bakery",
//       name: "Bakery Products",
//       image: BakeryProduct,
//       description: "Freshly baked cakes, pastries, and cookies made with the finest ingredients.",
//       priceRange: "₹50 - ₹500",
//       featuredProducts: [
//         { id: 1, name: "Chocolate Cake", price: "₹250", image: "https://example.com/chocolate-cake.jpg" },
//         { id: 2, name: "Butter Cookies", price: "₹150", image: "https://example.com/butter-cookies.jpg" },
//       ],
//     },
//     {
//       id: "masala",
//       name: "Masala",
//       image: masala,
//       description: "Handmade organic spices and masalas to add rich flavors to your dishes.",
//       priceRange: "₹30 - ₹400",
//       featuredProducts: [
//         { id: 3, name: "Garam Masala", price: "₹100", image: "https://example.com/garam-masala.jpg" },
//         { id: 4, name: "Turmeric Powder", price: "₹80", image: "https://example.com/turmeric.jpg" },
//       ],
//     },
//     {
//       id: "jewellery",
//       name: "Home Made Jewellery",
//       image: Homemadejewellery,
//       description: "Beautiful handcrafted jewellery made from beads, stones, and metals.",
//       priceRange: "₹200 - ₹5000",
//       featuredProducts: [
//         { id: 5, name: "Beaded Necklace", price: "₹700", image: "https://example.com/necklace.jpg" },
//         { id: 6, name: "Handmade Earrings", price: "₹350", image: "https://example.com/earrings.jpg" },
//       ],
//     },
//     {
//       id: "pickle",
//       name: "Pickle",
//       image: pickle,
//       description: "Traditional homemade pickles with authentic taste and spices.",
//       priceRange: "₹50 - ₹300",
//       featuredProducts: [
//         { id: 7, name: "Mango Pickle", price: "₹120", image: "https://example.com/mango-pickle.jpg" },
//         { id: 8, name: "Lemon Pickle", price: "₹100", image: "https://example.com/lemon-pickle.jpg" },
//       ],
//     },
//     {
//       id: "thalipith",
//       name: "Thalipith Bhajni",
//       image: thalipithbhajni,
//       description: "A nutritious flour mix for making delicious Thalipith.",
//       priceRange: "₹80 - ₹250",
//       featuredProducts: [
//         { id: 9, name: "Traditional Bhajni", price: "₹200", image: "https://example.com/bhajni.jpg" },
//         { id: 10, name: "Multigrain Bhajni", price: "₹220", image: "https://example.com/multigrain-bhajni.jpg" },
//       ],
//     },
//     {
//       id: "herbal",
//       name: "Herbal Products",
//       image: herbalproduct,
//       description: "Pure and natural herbal products for a healthier lifestyle.",
//       priceRange: "₹100 - ₹1000",
//       featuredProducts: [
//         { id: 11, name: "Aloe Vera Gel", price: "₹250", image: "https://example.com/aloe-vera.jpg" },
//         { id: 12, name: "Herbal Hair Oil", price: "₹400", image: "https://example.com/hair-oil.jpg" },
//       ],
//     },
//     {
//       id: "dryfruits",
//       name: "Dry Fruits & Nuts",
//       image: "",
//       description: "Premium quality dry fruits and nuts for a healthy snack.",
//       priceRange: "₹200 - ₹1500",
//       featuredProducts: [
//         { id: 13, name: "Almonds (500g)", price: "₹600", image: "https://example.com/almonds.jpg" },
//         { id: 14, name: "Cashews (500g)", price: "₹750", image: "https://example.com/cashews.jpg" },
//       ],
//     },
//     {
//       id: "papad",
//       name: "Papad & Snacks",
//       image: "",
//       description: "Crispy and delicious homemade papads and snacks.",
//       priceRange: "₹50 - ₹300",
//       featuredProducts: [
//         { id: 15, name: "Udad Dal Papad", price: "₹120", image: "https://example.com/papad.jpg" },
//         { id: 16, name: "Chakli (250g)", price: "₹150", image: "https://example.com/chakli.jpg" },
//       ],
//     },
//   ];
  

//   return (
//     <div className="pt-24 w-full text-center">
//   <h1 className="text-4xl font-bold text-orange-600">Welcome to Gharguti Food</h1>
//   <p className="mt-4 text-lg">Taste the tradition with every bite!</p>

//   {/* Image Slider */}
//   <div className="w-full max-w-screen-lg mx-auto mt-6 relative">
//     <img
//       src={images[currentImageIndex]}
//       alt={`Slide ${currentImageIndex + 1}`}
//       className="w-full h-96 object-cover rounded-lg transition-opacity duration-1000"
//     />
//   </div>

//   {/* Product Categories */}
//   <div className="mt-12">
//     <h2 className="text-3xl font-semibold text-gray-800">Our Products</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
//       {categories.map((category) => (
//         <div key={category.id} className="bg-white shadow-lg rounded-lg p-4">
//           <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-md" />
//           <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
//           <p className="text-gray-600 mt-2">{category.description}</p>
//           <p className="text-lg font-medium text-gray-800 mt-2">Price Range: {category.priceRange}</p>
//           <div className="mt-4 flex gap-2 overflow-x-auto">
//             {category.featuredProducts.slice(0, 2).map((product) => (
//               <img
//                 key={product.id}
//                 src={product.image}
//                 alt={product.name}
//                 className="w-16 h-16 object-cover rounded-md border"
//               />
//             ))}
//           </div>
//           <button
//             onClick={() => handleViewMore(category)}
//             className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
//           >
//             View More
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//   );
// };

// export default Home;
