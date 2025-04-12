import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CreateWorkshop() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    startTime: '',
    endTime: '',
    capacity: 20,
    price: '',
    image: '',
    shortDescription: '',
    detailedDescription: '',
    prerequisites: '',
    materialsNeeded: '',
    isPublished: false
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Categories available for workshops
  const categories = [
    'Woodworking',
    'Ceramics',
    'Textiles',
    'Metalwork',
    'Glasswork',
    'Leathercraft',
    'Bookbinding',
    'Papercraft',
    'Jewelry',
    'Other'
  ];

  // Check auth status on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userType = localStorage.getItem('userType');
    
    // If not logged in or not a host, redirect to login
    if (!isLoggedIn || userType !== 'host') {
      router.push('/auth/login?redirect=/workshop/host/create');
      return;
    }
    
    setIsLoading(false);
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) || 0 : value
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Workshop title is required';
    }
    
    if (!formData.category) {
      errors.category = 'Please select a category';
    }
    
    if (!formData.date) {
      errors.date = 'Workshop date is required';
    }
    
    if (!formData.startTime) {
      errors.startTime = 'Start time is required';
    }
    
    if (!formData.endTime) {
      errors.endTime = 'End time is required';
    }
    
    if (!formData.price) {
      errors.price = 'Price is required';
    } else if (isNaN(parseFloat(formData.price))) {
      errors.price = 'Price must be a valid number';
    }
    
    if (!formData.shortDescription.trim()) {
      errors.shortDescription = 'Short description is required';
    } else if (formData.shortDescription.length > 200) {
      errors.shortDescription = 'Short description must be less than 200 characters';
    }
    
    if (!formData.detailedDescription.trim()) {
      errors.detailedDescription = 'Detailed description is required';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      window.scrollTo(0, 0);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // In a real app, this would send data to the backend
      console.log('Workshop data submitted:', formData);
      
      // Redirect to dashboard
      router.push('/workshop/host/dashboard');
    }, 1500);
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/workshop/host/dashboard" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Create New Workshop</h1>
      </div>
      
      {Object.keys(formErrors).length > 0 && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          <p className="font-medium">Please correct the following errors:</p>
          <ul className="list-disc list-inside mt-2">
            {Object.values(formErrors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Workshop Details</h2>
          <p className="text-sm text-gray-500">All fields marked with * are required</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Workshop Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="e.g., Traditional Japanese Pottery Techniques"
            />
            {formErrors.title && (
              <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${formErrors.category ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {formErrors.category && (
                <p className="mt-1 text-sm text-red-500">{formErrors.category}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${formErrors.date ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.date && (
                <p className="mt-1 text-sm text-red-500">{formErrors.date}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${formErrors.startTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.startTime && (
                <p className="mt-1 text-sm text-red-500">{formErrors.startTime}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                End Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${formErrors.endTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.endTime && (
                <p className="mt-1 text-sm text-red-500">{formErrors.endTime}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (USD) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={`w-full pl-7 px-4 py-2 border ${formErrors.price ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="45.00"
                />
              </div>
              {formErrors.price && (
                <p className="mt-1 text-sm text-red-500">{formErrors.price}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Participants
              </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                min="1"
                max="100"
                value={formData.capacity}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Workshop Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://example.com/workshop-image.jpg"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Short Description <span className="text-red-500">*</span>
              <span className="text-gray-500 text-xs ml-2">
                (max 200 characters)
              </span>
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              rows={2}
              value={formData.shortDescription}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${formErrors.shortDescription ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="A brief, compelling summary of your workshop"
            ></textarea>
            {formErrors.shortDescription && (
              <p className="mt-1 text-sm text-red-500">{formErrors.shortDescription}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              {formData.shortDescription.length}/200 characters
            </p>
          </div>
          
          <div>
            <label htmlFor="detailedDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Detailed Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="detailedDescription"
              name="detailedDescription"
              rows={6}
              value={formData.detailedDescription}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${formErrors.detailedDescription ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Provide a comprehensive description of your workshop, including techniques that will be taught, skills participants will learn, and what makes your workshop unique."
            ></textarea>
            {formErrors.detailedDescription && (
              <p className="mt-1 text-sm text-red-500">{formErrors.detailedDescription}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="prerequisites" className="block text-sm font-medium text-gray-700 mb-1">
              Prerequisites (if any)
            </label>
            <textarea
              id="prerequisites"
              name="prerequisites"
              rows={3}
              value={formData.prerequisites}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Basic knowledge of hand tools, Previous experience with clay, etc."
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="materialsNeeded" className="block text-sm font-medium text-gray-700 mb-1">
              Materials Needed
            </label>
            <textarea
              id="materialsNeeded"
              name="materialsNeeded"
              rows={3}
              value={formData.materialsNeeded}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="List all materials participants will need to have on hand. Be specific with brands or alternatives if relevant."
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input
              id="isPublished"
              name="isPublished"
              type="checkbox"
              checked={formData.isPublished}
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-700">
              Publish immediately (otherwise save as draft)
            </label>
          </div>
          
          <div className="pt-5 border-t border-gray-200 flex justify-end space-x-4">
            <Link
              href="/workshop/host/dashboard"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                'Save Workshop'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 