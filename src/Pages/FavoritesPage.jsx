import React from "react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((cake) => cake.id !== id));
  };

  return (
    <div className="pt-24 max-w-4xl mx-auto text-center">
      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 mb-4">
        Back
      </button>
      <h2 className="text-4xl font-bold text-orange-600">Favorite Cakes</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-700 mt-4">No favorite cakes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
          {favorites.map((cake) => (
            <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">{cake.name}</h3>
              <p className="text-gray-700">Flavor: {cake.flavor}</p>
              <p className="text-gray-700">Weight: {cake.weight}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{cake.price}</p>
              <button
                onClick={() => removeFromFavorites(cake.id)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
