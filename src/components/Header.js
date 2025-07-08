'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { FiShoppingCart, FiUser, FiLogOut, FiLogIn, FiHome, FiShoppingBag, FiPieChart } from 'react-icons/fi';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          FreshFruits
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="flex items-center text-gray-700 hover:text-green-600 transition">
            <FiHome className="mr-1" /> Home
          </Link>
          <Link href="/products" className="flex items-center text-gray-700 hover:text-green-600 transition">
            <FiShoppingBag className="mr-1" /> Products
          </Link>
          {user && (
            <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-green-600 transition">
              <FiPieChart className="mr-1" /> Dashboard
            </Link>
          )}
          {user && (
            <Link href="/account" className="flex items-center text-gray-700 hover:text-green-600 transition">
              <FiUser className="mr-1" /> Account
            </Link>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-green-600 transition relative">
            <FiShoppingCart size={20} />
            {user && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            )}
          </Link>
          {user ? (
            <button onClick={signOut} className="flex items-center text-gray-700 hover:text-green-600 transition">
              <FiLogOut className="mr-1" /> Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="flex items-center text-gray-700 hover:text-green-600 transition">
                <FiLogIn className="mr-1" /> Login
              </Link>
              <Link href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
