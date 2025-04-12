import React from 'react';

export default function DocumentationPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Document Your Craft</h1>
        <p className="text-xl text-gray-600">
          Preserve your specialized knowledge and techniques for future generations
        </p>
      </div>

      {/* Documentation Process Explanation */}
      <div className="mb-12 bg-indigo-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-medium text-lg">Record Your Process</h3>
              <p className="text-gray-600">Upload videos or images demonstrating your techniques. Our AI will help organize and annotate your content.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-medium text-lg">Add Detailed Descriptions</h3>
              <p className="text-gray-600">Explain the nuances of your techniques, including materials, tools, and troubleshooting tips.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-medium text-lg">Create Interactive Elements</h3>
              <p className="text-gray-600">Build interactive 3D models or step-by-step guides that learners can engage with.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="font-medium text-lg">Publish and Connect</h3>
              <p className="text-gray-600">Make your knowledge available to learners and connect with those who want to master your craft.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Form */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-6">Start Documenting</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="craftName" className="block mb-1 font-medium">Craft Name</label>
            <input 
              type="text" 
              id="craftName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Traditional Blacksmithing, Violin Making"
            />
          </div>

          <div>
            <label htmlFor="craftCategory" className="block mb-1 font-medium">Category</label>
            <select 
              id="craftCategory" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a category</option>
              <option value="woodworking">Woodworking</option>
              <option value="metalwork">Metalwork</option>
              <option value="textiles">Textiles</option>
              <option value="ceramics">Ceramics</option>
              <option value="culinary">Culinary Arts</option>
              <option value="music">Musical Instruments</option>
              <option value="cultural">Cultural Practices</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="overview" className="block mb-1 font-medium">Overview Description</label>
            <textarea 
              id="overview" 
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Provide a brief overview of this craft and its cultural or historical significance"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Media Upload</label>
            <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600 justify-center">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                  <span>Upload files</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">Video, images, or 3D models (max 100MB)</p>
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Continue Documentation
            </button>
          </div>
        </form>
      </div>

      {/* Featured Documentation Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Documentation Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Video Preview</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1">Traditional Japanese Woodworking</h3>
              <p className="text-gray-600 text-sm mb-2">By Master Craftsman Tanaka Hiroshi</p>
              <p className="text-gray-700">Detailed documentation of joinery techniques used in temple construction without nails.</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Video Preview</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1">Navajo Weaving Patterns</h3>
              <p className="text-gray-600 text-sm mb-2">By Elder Sarah Begay</p>
              <p className="text-gray-700">Complete guide to traditional Navajo weaving techniques, symbols, and their cultural significance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Assisted Documentation */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">AI-Assisted Documentation</h2>
        <p className="mb-4">Our intelligent assistant helps you capture your expertise more effectively:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Automatic transcription of video demonstrations</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suggested annotations for key techniques</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Structured organization of your content</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Prompts for including important details you might forget</span>
          </li>
        </ul>
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
          Learn More About AI Assistance
        </button>
      </div>
    </div>
  );
} 