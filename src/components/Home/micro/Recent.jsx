import React, { useState } from 'react';

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-sm m-4 border rounded-lg shadow ms-8 hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-start p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
            R
          </div>
          <div>
            <h4 className="font-semibold text-sm">Shrimp and Chorizo Paella</h4>
            <p className="text-xs text-gray-500">September 14, 2016</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700">WhatsApp</button>
          <button className="text-gray-500 hover:text-gray-700">
            ⋮
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80"
          alt="Paella dish"
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Description */}
      <div className="p-4 pt-2">
        <p className="text-sm text-gray-600">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </p>
      </div>

      {/* Action Icons */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex gap-3 text-gray-600">
          <button title="Favorite" className="hover:text-red-500">❤️</button>
          <button title="Share" className="hover:text-blue-500">🔗</button>
        </div>
        <button
          onClick={handleExpandClick}
          className={`transition-transform transform ${expanded ? 'rotate-180' : ''}`}
        >
          ▼
        </button>
      </div>

      {/* Expandable Content */}
      {expanded && (
        <div className="px-4 pb-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold">Method:</p>
          <p>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</p>
          <p>
            Heat oil in a large pan over medium-high heat. Add chicken, shrimp and chorizo, cook until lightly browned.
          </p>
          <p>
            Add rice, artichokes, and peppers. Cook without stirring until most of the liquid is absorbed.
          </p>
          <p>Set aside off heat to rest for 10 minutes before serving.</p>
        </div>
      )}
    </div>
  );
}
