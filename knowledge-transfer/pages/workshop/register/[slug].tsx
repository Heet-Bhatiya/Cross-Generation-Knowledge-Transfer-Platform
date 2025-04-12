import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WorkshopRegistration() {
  const router = useRouter();
  const { slug } = router.query;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: 'beginner', // Default value
    specialRequirements: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Sample workshop data based on slugs (same data as in [slug].tsx)
  const workshopData = {
    'hand-carved-spoons': {
      title: 'Hand-Carved Spoon Making',
      category: 'Woodworking',
      date: 'July 25, 2023',
      time: '2:00 PM - 4:00 PM (UTC)',
      instructor: 'Erik Johansson',
      price: '$45',
      description: 'Learn traditional Scandinavian techniques for carving functional and beautiful wooden spoons with master woodworker Erik Johansson.',
      color: 'indigo'
    },
    'raku-pottery': {
      title: 'Japanese Raku Pottery',
      category: 'Ceramics',
      date: 'August 3, 2023',
      time: '6:00 PM - 9:00 PM (UTC)',
      instructor: 'Keiko Tanaka',
      price: '$60',
      description: 'Experience the ancient Japanese firing technique of Raku with master ceramicist Keiko Tanaka in this hands-on virtual workshop.',
      color: 'amber'
    },
    'sashiko-stitching': {
      title: 'Traditional Sashiko Stitching',
      category: 'Textiles',
      date: 'August 10, 2023',
      time: '10:00 AM - 12:00 PM (UTC)',
      instructor: 'Yumiko Higashi',
      price: '$35',
      description: 'Master the beautiful Japanese reinforcement stitching technique that combines function with striking geometric patterns.',
      color: 'emerald'
    },
    'leather-tooling': {
      title: 'Traditional Leather Tooling',
      category: 'Leathercraft',
      date: 'July 18, 2023',
      time: '2:00 PM - 4:30 PM (UTC)',
      instructor: 'Marco Rossi',
      price: '$50',
      description: 'Learn the art of traditional leather tooling and create your own custom leather piece with master craftsman Marco Rossi.',
      color: 'emerald'
    },
    'stained-glass': {
      title: 'Stained Glass Fundamentals',
      category: 'Glasswork',
      date: 'July 22, 2023',
      time: '6:00 PM - 8:00 PM (UTC)',
      instructor: 'Emma Claire',
      price: '$55',
      description: 'Learn the basics of creating beautiful stained glass pieces using the copper foil technique pioneered by Tiffany.',
      color: 'blue'
    },
    'japanese-bookbinding': {
      title: 'Traditional Japanese Bookbinding',
      category: 'Bookbinding',
      date: 'July 29, 2023',
      time: '10:00 AM - 12:30 PM (UTC)',
      instructor: 'Yukio Tanaka',
      price: '$40',
      description: 'Create your own hand-bound journal using traditional Japanese techniques that have been refined over centuries.',
      color: 'amber'
    }
  };

  const workshop = workshopData[slug as string];

  if (!workshop) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Workshop Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, the workshop you're trying to register for doesn't exist.</p>
        <Link href="/workshop" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
          Browse All Workshops
        </Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
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
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // In a real app, you would submit to an API here
      console.log('Form submitted:', formData);
      
    }, 1500);
  };
  
  // Success message after form submission
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Registration Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for registering for <span className="font-semibold">{workshop.title}</span>. We've sent a confirmation email to <span className="font-semibold">{formData.email}</span> with all the details.
          </p>
          <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
            <h2 className="font-semibold mb-2 text-gray-700">Workshop Details</h2>
            <p className="text-gray-600"><span className="font-medium">Date:</span> {workshop.date}</p>
            <p className="text-gray-600"><span className="font-medium">Time:</span> {workshop.time}</p>
            <p className="text-gray-600"><span className="font-medium">Instructor:</span> {workshop.instructor}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshop" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Back to Workshops
            </Link>
            <Link href="/" className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href={`/workshop/${slug}`} className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
        ← Back to Workshop
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
            <h1 className="text-2xl font-bold mb-6">Register for Workshop</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {formErrors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {formErrors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="beginner">Beginner - No experience</option>
                  <option value="novice">Novice - Some basic knowledge</option>
                  <option value="intermediate">Intermediate - Previous experience</option>
                  <option value="advanced">Advanced - Significant experience</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requirements or Questions
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Let us know if you have any special requirements, allergies, or questions about the workshop."
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className={`h-4 w-4 ${formErrors.agreeToTerms ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-indigo-500 text-indigo-600`}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                      I agree to the <Link href="#" className="text-indigo-600 hover:text-indigo-500">terms and conditions</Link> <span className="text-red-500">*</span>
                    </label>
                    {formErrors.agreeToTerms && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.agreeToTerms}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 ${
                    workshop.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' :
                    workshop.color === 'amber' ? 'bg-amber-600 hover:bg-amber-700' :
                    workshop.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
                    workshop.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    'bg-indigo-600 hover:bg-indigo-700'
                  } text-white font-medium rounded-lg transition flex items-center`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Workshop Summary</h2>
            
            <div className={`h-32 mb-4 rounded-lg bg-gradient-to-r ${
              workshop.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
              workshop.color === 'amber' ? 'from-amber-500 to-amber-600' :
              workshop.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
              workshop.color === 'blue' ? 'from-blue-500 to-blue-600' :
              'from-indigo-500 to-indigo-600'
            } flex items-center justify-center`}>
              <h3 className="text-xl font-bold text-white text-center px-4">{workshop.title}</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{workshop.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{workshop.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Instructor:</span>
                <span className="font-medium">{workshop.instructor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium">{workshop.price}</span>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className={`text-sm font-medium ${
                  workshop.color === 'indigo' ? 'text-indigo-600 bg-indigo-50' :
                  workshop.color === 'amber' ? 'text-amber-600 bg-amber-50' :
                  workshop.color === 'emerald' ? 'text-emerald-600 bg-emerald-50' :
                  workshop.color === 'blue' ? 'text-blue-600 bg-blue-50' :
                  'text-indigo-600 bg-indigo-50'
                } px-2 py-1 rounded-full`}>
                  {workshop.category}
                </span>
              </div>
            </div>
            
            <div className="text-gray-600 text-sm pb-4 border-b border-gray-100 mb-4">
              <p>{workshop.description}</p>
            </div>
            
            <div className="text-gray-600 text-sm">
              <p className="mb-2"><span className="font-medium">Cancellation Policy:</span> Full refund if cancelled 7 days before the workshop.</p>
              <p><span className="font-medium">Materials:</span> A detailed list will be sent after registration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 