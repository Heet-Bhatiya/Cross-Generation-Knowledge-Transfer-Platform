import React from 'react';
import Link from 'next/link';

export default function LearningPage() {
  // Sample data for learning modules
  const featuredModules = [
    {
      id: 1,
      title: 'Traditional Blacksmithing: Forge Fundamentals',
      instructor: 'James Peterson',
      level: 'Beginner',
      duration: '6 weeks',
      students: 328,
      rating: 4.8,
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      title: 'Japanese Joinery Techniques',
      instructor: 'Tanaka Hiroshi',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 215,
      rating: 4.9,
      image: '/placeholder.jpg'
    },
    {
      id: 3,
      title: 'Traditional Navajo Weaving',
      instructor: 'Sarah Begay',
      level: 'Beginner to Intermediate',
      duration: '10 weeks',
      students: 189,
      rating: 4.7,
      image: '/placeholder.jpg'
    }
  ];

  // Categories for filter
  const categories = [
    'All Categories', 'Woodworking', 'Metalworking', 'Textiles', 
    'Ceramics', 'Culinary', 'Cultural Practices', 'Musical Instruments'
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Interactive Learning Modules</h1>
        <p className="text-xl text-gray-600">
          Master traditional crafts and specialized skills through our comprehensive learning experiences
        </p>
      </div>

      {/* Featured Module */}
      <div className="relative mb-12 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 p-8 md:p-12 text-white max-w-3xl">
          <span className="inline-block bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium mb-4">Featured Module</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Master the Art of Traditional Woodcarving</h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Learn centuries-old techniques from master craftsman Richard Wood through immersive video lessons, 3D models, and personalized feedback.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">12 Weeks</div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Intermediate</div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">45+ Lessons</div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Certificate</div>
          </div>
          <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
            Explore Module
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                index === 0 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Sort by: Popular</option>
            <option>Newest</option>
            <option>Highest Rated</option>
            <option>Duration: Short to Long</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredModules.map((module) => (
          <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Module Preview</div>
              <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded text-sm font-medium">
                {module.level}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{module.title}</h3>
              <p className="text-gray-600 mb-4">By {module.instructor}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{module.rating}</span>
                  <span className="text-gray-500 ml-1">({module.students} students)</span>
                </div>
                <div className="text-gray-600">{module.duration}</div>
              </div>
              
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Videos</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">3D Models</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Quizzes</span>
              </div>
              
              <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                View Module
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Experience Features */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Interactive Learning Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">HD Video Lessons</h3>
            <p className="text-gray-600">
              Watch detailed demonstrations from multiple angles with expert narration and slow-motion for complex techniques.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive 3D Models</h3>
            <p className="text-gray-600">
              Explore tools, materials, and completed pieces from every angle with detailed annotations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Feedback</h3>
            <p className="text-gray-600">
              Submit photos or videos of your work for personalized feedback from instructors and community experts.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="mb-12 border border-gray-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">Track Your Learning Progress</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Our platform helps you stay on track with your learning goals and provides verification of your acquired skills:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Module completion tracking with visual progress indicators</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Knowledge verification through quizzes and assessments</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Practical skill verification through project submissions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Digital certificates for completed learning paths</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Your Learning Dashboard</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Blacksmithing Basics</span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Leather Crafting</span>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Navajo Weaving</span>
                  <span className="text-sm font-medium">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="pt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition w-full">
                  View Your Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-6">
          Discover the joy of mastering traditional crafts and preserving cultural heritage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/learning/browse" className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
            Browse All Modules
          </Link>
          <Link href="/learning/path" className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-600 transition">
            Craft a Learning Path
          </Link>
        </div>
      </div>
    </div>
  );
} 