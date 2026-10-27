'use client';

import React from 'react';
import { useUsers } from '@/hooks/use-users';

export default function DashboardPage() {
  const { data, error, isLoading, refetch } = useUsers();
  
  // Dynamically resolve the API URL for production vs local development
  const apiUrl = 
    process.env.NEXT_PUBLIC_API_URL || 
    "https://backendnextjs-webapp-gtgsc2dbduhmh9e0.westus3-01.azurewebsites.net/api/v1";

  return (
    <main className="min-h-screen p-8 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Backend Integration Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">
              Connected to {apiUrl}
            </p>
          </div>
          <a
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Go to Login
          </a>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg mb-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-1">Error connecting to backend:</h2>
            <p className="text-sm">{error.message || "Network Error"}</p>
            <button
              onClick={() => refetch()}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition cursor-pointer"
            >
              Retry Request
            </button>
          </div>
        )}

        {isLoading && (
          <p className="text-gray-500 py-4">Loading data from backend...</p>
        )}

        {data && (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Successfully Connected!</h2>
            <pre className="bg-white p-4 rounded border border-green-100 text-xs overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}