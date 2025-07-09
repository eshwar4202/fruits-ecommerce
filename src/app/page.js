import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-white">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4 z-10" style={{ color: 'white' }}>Fresh Fruits Delivered to Your Door</h1>
          <p className="text-xl text-gray-100 mb-8">Premium quality fruits sourced directly from local farms</p>
          <Link href="/products" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Shop Now
          </Link>
        </section>
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose FreshFruits?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your fruits delivered within 24 hours</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-500 text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the freshest fruits from trusted farms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-500 text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-2">Organic Options</h3>
              <p className="text-gray-600">Wide selection of organic fruits available</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
