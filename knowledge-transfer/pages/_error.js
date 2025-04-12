import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-4">
        {statusCode ? `Error ${statusCode}` : 'An error occurred'}
      </h1>
      <p className="text-xl mb-6">
        {statusCode === 404 
          ? "We couldn't find the page you were looking for." 
          : "Sorry, something went wrong on our end."}
      </p>
      <Link href="/" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
        Go back home
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 