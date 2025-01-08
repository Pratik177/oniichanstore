'use client';
import data from '@/lib/data';
import React, { useState } from 'react';


// Sample data array
const items = [
  { id: 1, label: 'Item 1', price: 10 },
  { id: 2, label: 'Item 2', price: 20 },
  { id: 3, label: 'Item 3', price: 30 },
  { id: 4, label: 'Item 4', price: 40 },
  { id: 5, label: 'Item 4', price: 40 },
];

const PriceCalculator = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null); // Store the ID of the selected item
  const [totalPrice, setTotalPrice] = useState<number>(0); // Store the total price

  const handleButtonClick = (id: number, price: number) => {
    setSelectedItem(id); // Update selected item
    setTotalPrice(price); // Update total price to the price of the selected item
  };
  
  return (
    
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Total Price: ${totalPrice}</h1>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id, item.price)}
            className={`px-4 py-2 rounded focus:outline-none ${
              selectedItem === item.id
                ? 'bg-green-500 text-white' // Highlight selected button
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {item.label} - ${item.price}
          </button>
        ))}
      </div>
      {data.products.map((product) => (
        <div key={product.slug}>{product.name}
          <ul>
            {product.items?.map((item) => (
              <button
              key={item.id}
              onClick={() => handleButtonClick(item.id, item.price)}
              className={`px-4 py-2 rounded focus:outline-none ${
                selectedItem === item.id
                  ? 'bg-green-500 text-white' // Highlight selected button
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {item.label} - ${item.price}
            </button>
            ))}
          </ul>
          </div>
      ))}
      </div>
  );
};

export default PriceCalculator;
