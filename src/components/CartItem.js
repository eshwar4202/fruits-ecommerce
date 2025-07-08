'use client';
import Image from 'next/image';
import { FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
        {item.products.image_url ? (
          <img
            src={item.products.image_url}
            alt={item.products.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-gray-800">{item.products.name}</h3>
        <p className="text-gray-600 text-sm">${item.products.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-3 py-1">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 p-2"
          aria-label="Remove item"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
