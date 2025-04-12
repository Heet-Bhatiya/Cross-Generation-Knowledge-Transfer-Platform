import React from 'react';
import Link from 'next/link';

export default function ForumsPage() {
  // Sample forum categories
  const categories = [
    { id: 1, name: 'Woodworking', count: 124, icon: '🪚' },
    { id: 2, name: 'Blacksmithing', count: 87, icon: '🔨' },
    { id: 3, name: 'Textile Arts', count: 93, icon: '🧵' },
    { id: 4, name: 'Ceramics', count: 68, icon: '🏺' },
    { id: 5, name: 'Instrument Making', count: 49, icon: '🎻' },
    { id: 6, name: 'Traditional Cooking', count: 105, icon: '🍳' },
    { id: 7, name: 'Stone Masonry', count: 34, icon: '🧱' },
    { id: 8, name: 'Cultural Practices', count: 76, icon: '🏮' }
  ];

  // Sample recent discussions
  const recentDiscussions = [
    {
      id: 1,
      title: 'Troubleshooting uneven tension in traditional backstrap weaving',
      category: 'Textile Arts',
      author: 'Maria Lopez',
      authorRole: 'Weaving Apprentice',
      replies: 12,
      views: 89,
      lastActivity: '2 hours ago',
      solved: true
    },
    {
      id: 2,
      title: 'Traditional Japanese wood joinery techniques for curved pieces',
      category: 'Woodworking',
      author: 'Kenji Tanaka',
      authorRole: 'Master Carpenter',
      replies: 8,
      views: 56,
      lastActivity: '4 hours ago',
      solved: false
    },
    {
      id: 3,
      title: 'Maintaining proper forge temperature for pattern welding',
      category: 'Blacksmithing',
      author: 'Robert Smith',
      authorRole: 'Bladesmith',
      replies: 15,
      views: 112,
      lastActivity: '1 day ago',
      solved: true
    },
    {
      id: 4,
      title: 'Clay selection for traditional Native American pottery',
      category: 'Ceramics',
      author: 'Sarah Begay',
      authorRole: 'Master Potter',
      replies: 6,
      views: 43,
      lastActivity: '3 days ago',
      solved: false
    },
    {
      id: 5,
      title: 'Techniques for hand-carved violin scrolls',
      category: 'Instrument Making',
      author: 'Giovanni Rossi',
      authorRole: 'Luthier',
      replies: 9,
      views: 78,
      lastActivity: '4 days ago',
      solved: true
    }
  ];

  // Sample featured discussion
  const featuredDiscussion = {
    title: 'Traditional hardwood steam bending without specialized equipment',
    category: 'Woodworking',
    author: 'James Peterson',
    authorRole: 'Furniture Maker',
    content: `
      I've been trying to recreate traditional Windsor chair techniques using only hand tools and materials that would have been available in the 18th century. My biggest challenge is steam bending the back spindles without modern equipment.
      
      Has anyone successfully used traditional methods for steam bending hardwoods? I'm particularly interested in:
      
      1. Creating an effective steam chamber using simple materials
      2. Determining optimal steam time for different hardwoods (ash, oak, maple)
      3. Making bending forms that prevent wood breakage
      4. Traditional clamping methods while the wood dries
      
      Any insights from those who've practiced these traditional methods would be greatly appreciated!
    `,
    replies: 24,
    views: 187,
    lastActivity: '6 hours ago'
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Craft Technique Forums</h1>
        <p className="text-xl text-gray-600">
          Connect with experts and enthusiasts to solve technique challenges and share specialized knowledge
        </p>
      </div>

      {/* Forum Search */}
      <div className="mb-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search forum discussions..."
              />
            </div>
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Search
            </button>
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              New Discussion
            </button>
          </div>
        </div>
      </div>

      {/* Categories and Recent Discussions */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Categories</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/forums/category/${category.id}`} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href="/forums/categories" className="text-indigo-600 font-medium hover:text-indigo-700">
                View All Categories →
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Recent Discussions</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="text-sm border-0 focus:ring-0">
                  <option>Latest Activity</option>
                  <option>Most Replies</option>
                  <option>Most Views</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            <ul className="divide-y divide-gray-100">
              {recentDiscussions.map((discussion) => (
                <li key={discussion.id} className="hover:bg-gray-50 transition">
                  <Link href={`/forums/discussion/${discussion.id}`} className="block p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-lg">
                        {discussion.title}
                        {discussion.solved && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                            Solved
                          </span>
                        )}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-1">
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">
                        {discussion.category}
                      </span>
                      <span>By {discussion.author} ({discussion.authorRole})</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>Last active {discussion.lastActivity}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-gray-100 text-center">
              <Link href="/forums/discussions" className="text-indigo-600 font-medium hover:text-indigo-700">
                View All Discussions →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Discussion */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Discussion</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl">{featuredDiscussion.title}</h3>
              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                {featuredDiscussion.category}
              </span>
            </div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <div className="font-medium">{featuredDiscussion.author}</div>
                <div className="text-sm text-gray-500">{featuredDiscussion.authorRole}</div>
              </div>
            </div>
            <div className="prose prose-indigo max-w-none mb-6">
              <p className="whitespace-pre-line">{featuredDiscussion.content}</p>
            </div>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <span>{featuredDiscussion.replies} replies</span>
              <span>{featuredDiscussion.views} views</span>
              <span>Last active {featuredDiscussion.lastActivity}</span>
            </div>
          </div>
          <div className="bg-gray-50 p-6 flex justify-between items-center">
            <div className="space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Upvote
                </span>
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </span>
              </button>
            </div>
            <Link href={`/forums/discussion/featured`} className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Join Discussion
            </Link>
          </div>
        </div>
      </div>

      {/* Community Stats and Expert Verification */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6">Community Stats</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">836</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1,523</div>
              <div className="text-gray-600">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">87%</div>
              <div className="text-gray-600">Questions Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">72</div>
              <div className="text-gray-600">Verified Experts</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Expert Verification</h2>
          <p className="text-gray-700 mb-4">
            Our community includes verified experts in various traditional crafts and cultural practices. Verified experts have demonstrated mastery in their fields through a rigorous vetting process.
          </p>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Experts can:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Provide authoritative answers to technique questions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Mark discussions as resolved with verified solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Host specialized discussion threads in their areas of expertise</span>
              </li>
            </ul>
          </div>
          <Link href="/forums/become-expert" className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition inline-block">
            Apply for Expert Verification
          </Link>
        </div>
      </div>

      {/* Forum Guidelines */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-4">Forum Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-2">Respectful Communication</h3>
            <p className="text-gray-600 text-sm">
              Treat all community members with respect. Remember that forum participants come from diverse backgrounds and skill levels.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Detailed Questions</h3>
            <p className="text-gray-600 text-sm">
              When asking questions, provide detailed context about your technique, materials, and specific challenges you're facing.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Proper Documentation</h3>
            <p className="text-gray-600 text-sm">
              Include photos, videos, or diagrams when possible to help others understand your process and provide better assistance.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 text-right">
          <Link href="/forums/guidelines" className="text-indigo-600 font-medium hover:text-indigo-700">
            Read Full Guidelines →
          </Link>
        </div>
      </div>
    </div>
  );
} 