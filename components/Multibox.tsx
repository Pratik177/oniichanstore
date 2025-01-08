'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Product } from '@/models/ProductModel';

interface MultiboxProps {
  product: Product;
}

const Multibox = ({ product }: MultiboxProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleButtonClick = (id: number, price: number) => {
    setSelectedItem(id);
    setTotalPrice(price);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <h2 className="text-lg font-bold mb-4 text-black">Select an Option</h2>
      <div className="flex flex-wrap space-x-4 sm:space-x-2 gap-2 justify-center"> {/* Add flex-wrap for responsiveness */}
        {product.items?.map((item: { id: number; price: number; label: string }) => (
          <Button
            key={item.id}
            onClick={() => handleButtonClick(item.id, item.price)}
            className={`px-4 py-2 rounded focus:outline-none transition-all w-full sm:w-auto ${
              selectedItem === item.id
                ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-400'
                : 'bg-base-100 text-white border-base-300 hover:bg-base-200'
            }`}
          >
            {item.label} - ${item.price.toFixed(2)}
          </Button>
        ))}
      </div>

      {selectedItem !== null && (
        <div className="mt-4 text-black">
          <p className="text-lg font-semibold">Selected Option:</p>
          <p>
            {product.items?.find((item) => item.id === selectedItem)?.label} - ${totalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Multibox;
