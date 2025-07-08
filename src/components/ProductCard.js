'use client';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { supabase } from '../config/supabase';

const ProductCard = ({ product }) => {
  const { user } = useAuth();

  const addToCart = async () => {
    if (!user) {
      toast.error('Please sign in to add items to your cart');
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .upsert(
          { user_id: user.id, product_id: product.id, quantity: 1 },
          { onConflict: 'user_id,product_id' }
        )
        .select();

      if (error) throw error;

      toast.success('Added to cart!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          {product.image_url ? (
            <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-gray-400">No image</span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-green-600 transition">{product.name}</h3>
        </Link>
        {product.category && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
            {product.category}
          </span>
        )}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800">${product.price.toFixed(2)}</span>
          <button
            onClick={addToCart}
            className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition"
            aria-label="Add to cart"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
