import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tools', name: 'Tools & Equipment' },
    { id: 'materials', name: 'Raw Materials' },
    { id: 'supplies', name: 'Craft Supplies' },
    { id: 'kits', name: 'DIY Kits' },
    { id: 'finished', name: 'Handcrafted Items' },
  ];

  const products = [
    {
      id: 'handmade-chisel-set',
      name: 'Artisan Chisel Set',
      price: 129.99,
      image: '/placeholders/product-1.jpg',
      category: 'tools',
      rating: 4.9,
      reviews: 127,
      seller: 'Traditional Woodcraft Co.',
      location: 'Oregon, USA',
    },
    {
      id: 'natural-wool-bundle',
      name: 'Natural Dyed Wool Bundle',
      price: 45.00,
      image: '/placeholders/product-2.jpg',
      category: 'materials',
      rating: 4.7,
      reviews: 84,
      seller: 'Highland Fiber Arts',
      location: 'Scotland, UK',
    },
    {
      id: 'leather-tool-kit',
      name: 'Leather Crafting Starter Kit',
      price: 89.95,
      image: '/placeholders/product-3.jpg',
      category: 'kits',
      rating: 4.8,
      reviews: 211,
      seller: 'Master Leatherworks',
      location: 'Florence, Italy',
    },
    {
      id: 'ceramic-glaze-set',
      name: 'Artisanal Ceramic Glazes Set',
      price: 65.50,
      image: '/placeholders/product-4.jpg',
      category: 'supplies',
      rating: 4.6,
      reviews: 59,
      seller: 'Pottery Essentials',
      location: 'Kyoto, Japan',
    },
    {
      id: 'handwoven-basket',
      name: 'Traditional Woven Market Basket',
      price: 78.00,
      image: '/placeholders/product-5.jpg',
      category: 'finished',
      rating: 4.9,
      reviews: 143,
      seller: 'Weavers Collective',
      location: 'Ghana, West Africa',
    },
    {
      id: 'hand-forged-hammer',
      name: 'Hand-Forged Blacksmith Hammer',
      price: 112.00,
      image: '/placeholders/product-6.jpg',
      category: 'tools',
      rating: 5.0,
      reviews: 97,
      seller: 'Heritage Forge',
      location: 'Sweden',
    },
    {
      id: 'indigo-dye-kit',
      name: 'Natural Indigo Dye Kit',
      price: 35.99,
      image: '/placeholders/product-7.jpg',
      category: 'kits',
      rating: 4.7,
      reviews: 68,
      seller: 'Blue Hands Textiles',
      location: 'India',
    },
    {
      id: 'woodworking-plans',
      name: 'Traditional Furniture Plans Bundle',
      price: 29.99,
      image: '/placeholders/product-8.jpg',
      category: 'supplies',
      rating: 4.5,
      reviews: 42,
      seller: 'Heritage Woodworking',
      location: 'Vermont, USA',
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Craft Marketplace</h1>
        <p className="text-xl text-gray-600">
          Discover authentic craft supplies, tools, and handmade items from artisans worldwide
        </p>
      </div>

      {/* Featured Collection */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/90 to-indigo-700/40 z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholders/marketplace-banner.jpg')] bg-cover bg-center"></div>
          <div className="relative z-20 h-full flex flex-col justify-center p-10 text-white">
            <span className="text-indigo-200 uppercase tracking-wider mb-2">Featured Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Traditional Japanese Craft Tools</h2>
            <p className="max-w-xl mb-6">Discover meticulously crafted tools from master Japanese artisans, perfected over generations for precision and durability.</p>
            <div>
              <Link href="/collections/japanese-tools" legacyBehavior>
                <a className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
                  Explore Collection
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Marketplace */}
      <section className="mb-12">
        <div className="md:flex md:gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === category.id
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Seller Verification</h3>
              <div className="flex mb-4">
                <div className="bg-emerald-100 text-emerald-700 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-sm">
                  <h4 className="font-medium">Verified Artisans</h4>
                  <p className="text-gray-600">All sellers are vetted for authenticity</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="bg-emerald-100 text-emerald-700 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <h4 className="font-medium">Buyer Protection</h4>
                  <p className="text-gray-600">Secure transactions and quality guarantee</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-emerald-100 text-emerald-700 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="text-sm">
                  <h4 className="font-medium">Fair Trade</h4>
                  <p className="text-gray-600">Supporting traditional craft communities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="text-gray-500 text-sm">
                Showing {filteredProducts.length} products
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-48 bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{product.seller}</span>
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-bold mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{product.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                      <Link href={`/marketplace/product/${product.id}`} legacyBehavior>
                        <a className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seller CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl mb-12">
        <div className="md:flex items-center">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Become a Seller</h2>
            <p className="text-indigo-100 mb-6 max-w-xl">
              Join our global marketplace of traditional craft artisans. Share your authentic craft supplies, tools, and handmade items with passionate buyers worldwide.
            </p>
            <Link href="/marketplace/become-seller" legacyBehavior>
              <a className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
                Apply Now
              </a>
            </Link>
          </div>
          <div className="md:w-1/3 p-8 bg-indigo-700/30">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <h4 className="font-medium">Fair Commission Rates</h4>
                  <p className="text-sm text-indigo-200">Lower fees for traditional craft preservation</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <h4 className="font-medium">Global Reach</h4>
                  <p className="text-sm text-indigo-200">Connect with customers in 130+ countries</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="text-white">
                  <h4 className="font-medium">Simple Setup</h4>
                  <p className="text-sm text-indigo-200">Easy listing creation and management tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Sarah Wilson</h3>
                <p className="text-gray-500 text-sm">Textile Artist</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Finding traditional natural dyes was always a challenge until I discovered this marketplace. The quality is exceptional and I've connected with suppliers who share my commitment to traditional techniques."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">David Chen</h3>
                <p className="text-gray-500 text-sm">Furniture Maker</p>
              </div>
            </div>
            <p className="text-gray-600">
              "As a seller, I've found a community that truly values handcrafted quality. The platform makes it easy to reach customers who appreciate traditional woodworking techniques and are willing to invest in quality."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Maria Gonzales</h3>
                <p className="text-gray-500 text-sm">Ceramics Enthusiast</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The DIY pottery kits I purchased were exceptional quality and came with detailed instructions from the master potter. It's opened up a whole new world of traditional ceramic techniques I never thought I could learn at home."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 