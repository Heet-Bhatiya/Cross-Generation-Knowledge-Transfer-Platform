import React from 'react';
import Link from 'next/link';

export default function MarketplacePage() {
  // Sample products data
  const featuredProducts = [
    {
      id: 1,
      title: 'Handcrafted Maple Wood Bowl',
      creator: 'Alex Johnson',
      skillLevel: 'Intermediate',
      category: 'Woodworking',
      price: 95,
      location: 'Portland, OR',
      imageUrl: '/placeholder.jpg',
      rating: 4.8,
      reviews: 12
    },
    {
      id: 2,
      title: 'Traditional Navajo Woven Rug',
      creator: 'Sarah Begay',
      skillLevel: 'Advanced',
      category: 'Textile Arts',
      price: 350,
      location: 'Santa Fe, NM',
      imageUrl: '/placeholder.jpg',
      rating: 5.0,
      reviews: 8
    },
    {
      id: 3,
      title: 'Hand-Forged Garden Tools Set',
      creator: 'Robert Smith',
      skillLevel: 'Advanced',
      category: 'Blacksmithing',
      price: 175,
      location: 'Pittsburgh, PA',
      imageUrl: '/placeholder.jpg',
      rating: 4.9,
      reviews: 15
    },
    {
      id: 4,
      title: 'Traditional Clay Cooking Pot',
      creator: 'Maria Gonzalez',
      skillLevel: 'Intermediate',
      category: 'Ceramics',
      price: 65,
      location: 'Tucson, AZ',
      imageUrl: '/placeholder.jpg',
      rating: 4.7,
      reviews: 9
    },
    {
      id: 5,
      title: 'Hand-Carved Wooden Flute',
      creator: 'John White Eagle',
      skillLevel: 'Expert',
      category: 'Instrument Making',
      price: 220,
      location: 'Sioux Falls, SD',
      imageUrl: '/placeholder.jpg',
      rating: 5.0,
      reviews: 7
    },
    {
      id: 6,
      title: 'Traditional Sourdough Bread Kit',
      creator: 'Elena Rossi',
      skillLevel: 'Beginner',
      category: 'Traditional Cooking',
      price: 45,
      location: 'San Francisco, CA',
      imageUrl: '/placeholder.jpg',
      rating: 4.6,
      reviews: 23
    }
  ];

  // Categories for filter
  const categories = [
    'All Categories', 'Woodworking', 'Textile Arts', 'Blacksmithing', 
    'Ceramics', 'Instrument Making', 'Traditional Cooking', 'Leatherwork'
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Artisan Marketplace</h1>
        <p className="text-xl text-gray-600">
          Discover and purchase authentic handcrafted items made by apprentices and master craftspeople
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search for handcrafted items..."
              />
            </div>
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Search
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="category" className="block mb-1 text-sm font-medium">Category</label>
              <select 
                id="category" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="skillLevel" className="block mb-1 text-sm font-medium">Skill Level</label>
              <select 
                id="skillLevel" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Any Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div>
              <label htmlFor="priceRange" className="block mb-1 text-sm font-medium">Price Range</label>
              <select 
                id="priceRange" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Any Price</option>
                <option value="under50">Under $50</option>
                <option value="50to100">$50 - $100</option>
                <option value="100to200">$100 - $200</option>
                <option value="200plus">$200+</option>
              </select>
            </div>
            <div>
              <label htmlFor="sortBy" className="block mb-1 text-sm font-medium">Sort By</label>
              <select 
                id="sortBy" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace Introduction */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Connecting Craft to Community</h2>
            <p className="text-gray-700 mb-4">
              Our marketplace connects apprentices and master craftspeople with those who value authentic, handcrafted items. Every purchase supports an artisan who is preserving traditional skills and techniques.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-600">Authentic Handcrafted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">80%</div>
                <div className="text-sm text-gray-600">To the Artisan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">450+</div>
                <div className="text-sm text-gray-600">Active Sellers</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Sell Your Crafts</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ready to showcase your craftsmanship? Join our marketplace and connect with customers who value traditional techniques and quality work.
            </p>
            <Link href="/marketplace/become-seller" className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition block text-center">
              Become a Seller
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Artisan Products</h2>
          <Link href="/marketplace/all" className="text-indigo-600 font-medium hover:text-indigo-700">
            View All Products →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Product Image</div>
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500 ml-1">({product.reviews} reviews)</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-600">By {product.creator}</div>
                  <div className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">
                    {product.skillLevel}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-indigo-700">${product.price}</div>
                  <div className="text-gray-500 text-sm">{product.location}</div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Showcase */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Explore by Craft Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-indigo-700 text-white p-6 rounded-xl flex flex-col justify-between h-48">
            <div className="text-3xl">🪚</div>
            <div>
              <h3 className="font-bold text-xl mb-1">Woodworking</h3>
              <p className="text-indigo-200 text-sm">124 Products</p>
            </div>
          </div>
          <div className="bg-green-700 text-white p-6 rounded-xl flex flex-col justify-between h-48">
            <div className="text-3xl">🧵</div>
            <div>
              <h3 className="font-bold text-xl mb-1">Textile Arts</h3>
              <p className="text-green-200 text-sm">93 Products</p>
            </div>
          </div>
          <div className="bg-orange-700 text-white p-6 rounded-xl flex flex-col justify-between h-48">
            <div className="text-3xl">🔨</div>
            <div>
              <h3 className="font-bold text-xl mb-1">Blacksmithing</h3>
              <p className="text-orange-200 text-sm">87 Products</p>
            </div>
          </div>
          <div className="bg-purple-700 text-white p-6 rounded-xl flex flex-col justify-between h-48">
            <div className="text-3xl">🏺</div>
            <div>
              <h3 className="font-bold text-xl mb-1">Ceramics</h3>
              <p className="text-purple-200 text-sm">68 Products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The CraftBridge Marketplace Difference</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Authenticity Guaranteed</h3>
            <p className="text-gray-600">
              Every product is carefully reviewed to ensure it meets our standards for traditional craftsmanship and quality.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Supporting Artisans</h3>
            <p className="text-gray-600">
              80% of each sale goes directly to the craftsperson, helping to sustain traditional crafts and livelihoods.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Know The Story</h3>
            <p className="text-gray-600">
              Each item comes with details about the creator, their background, and the traditional techniques used.
            </p>
          </div>
        </div>
      </div>

      {/* Special Collections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Special Collections</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Apprentice Showcase</h3>
              <p className="text-white text-opacity-90 mb-4">Discover remarkable pieces from emerging artisans who are mastering traditional crafts</p>
              <Link href="/marketplace/collections/apprentice" className="w-max px-4 py-2 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
                Explore Collection
              </Link>
            </div>
          </div>
          <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Cultural Heritage</h3>
              <p className="text-white text-opacity-90 mb-4">Traditional items that represent important cultural practices and knowledge</p>
              <Link href="/marketplace/collections/cultural-heritage" className="w-max px-4 py-2 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12 bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">From Our Community</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Michael Thompson</h4>
                <p className="text-gray-600 text-sm">Woodworking Apprentice</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "The marketplace gave me a platform to sell my first major pieces after completing my woodworking courses. The feedback from customers has been invaluable for improving my craft."
            </p>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Lisa Chen</h4>
                <p className="text-gray-600 text-sm">Customer</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "I love that I can purchase items directly from the artisans who made them, and learn about the traditional techniques used. The quality is exceptional and each piece has a wonderful story behind it."
            </p>
            <div className="text-yellow-500">★★★★★</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700 text-white rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Marketplace Community</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
          Whether you're a craftsperson looking to sell your creations or someone who appreciates traditional craftsmanship, there's a place for you here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/marketplace/sell" className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
            Start Selling
          </Link>
          <Link href="/marketplace/all" className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-600 transition">
            Shop All Products
          </Link>
        </div>
      </div>
    </div>
  );
} 