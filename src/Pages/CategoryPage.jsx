import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BakeryProduct from "../assets/bakeryproducts.jpg";
import masala from "../assets/masala.webp";
import Homemadejewellery from "../assets/homemadeje.jpg";
import pickle from "../assets/SpicyPickle.png";
import thalipithbhajni from "../assets/thalipithbhajni.jpg";
import herbalproduct from "../assets/HerbalProduct.jpg";

const allProducts = {
  bakery: [
    { id: 1, name: "Chocolate Cake", price: "₹250", image: BakeryProduct, variants: ["1kg", "2kg", "3kg"] },
    { id: 2, name: "Cookies", price: "₹150", image: BakeryProduct, variants: ["500g", "1kg"] },
  ],
  masala: [
    { id: 3, name: "Chilli Powder", price: "₹100", image: masala, variants: ["100g", "250g", "500g"] },
    { id: 4, name: "Turmeric Powder", price: "₹80", image: masala, variants: ["100g", "250g", "500g"] },
  ],
  jewellery: [
    { id: 5, name: "Handmade Necklace", price: "₹300", image: Homemadejewellery, variants: ["Gold", "Silver"] },
  ],
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = allProducts[category] || [];

  return (
    <div className="pt-24 w-full max-w-3xl mx-auto text-center">
      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 mb-4">
        Back
      </button>

      <h1 className="text-4xl font-bold text-orange-600">{category.toUpperCase()} PRODUCTS</h1>

      {products.length === 0 ? (
        <p className="text-lg text-gray-700 mt-6">No products found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button
                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View Variants
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
