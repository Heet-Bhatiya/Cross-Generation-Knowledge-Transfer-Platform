import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Fetch user information from localStorage or API
    const storedUserName = localStorage.getItem('userName') || 'John Doe';
    const storedEmail = localStorage.getItem('userEmail') || 'john.doe@example.com';
    const storedUserType = localStorage.getItem('userType') || 'learner';

    setUserName(storedUserName);
    setEmail(storedEmail);
    setUserType(storedUserType);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out mb-4">← Back</button>
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Profile Settings</h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Personal Information</h2>
        <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out p-6">
          <p className="text-gray-700 mb-2"><strong>Name:</strong> {userName}</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> {email}</p>
          <p className="text-gray-700"><strong>Type:</strong> {userType}</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Account Security</h2>
        <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out p-6">
          <p className="text-gray-600">Update your password and secure your account.</p>
          {/* Add account security management functionality here */}
        </div>
      </section>
    </div>
  );
} 