"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">An error occurred while loading the blog post.</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => reset()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
        <Link
          href="/blogs"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Return to Blogs
        </Link>
      </div>
    </div>
  );
}
