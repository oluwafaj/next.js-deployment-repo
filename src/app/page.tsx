"use client";

import { useUsers } from "@/hooks/use-users";
import Link from "next/link";

export default function HomePage() {
  const { data, isLoading, isError, error, refetch } = useUsers();

  return (
    <main className="p-8 max-w-4xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Backend Integration Dashboard</h1>
          <p className="text-gray-600">Connected to http://localhost:3002/api/v1</p>
        </div>
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="p-4 bg-blue-50 text-blue-700 rounded-md">
          Fetching data from backend...
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          <p className="font-semibold">Error connecting to backend:</p>
          <p className="text-sm">{(error as Error)?.message}</p>
          <button
            onClick={() => refetch()}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Retry Request
          </button>
        </div>
      )}

      {/* Success State */}
      {data && (
        <div className="p-4 bg-green-50 text-green-800 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Data Received:</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}