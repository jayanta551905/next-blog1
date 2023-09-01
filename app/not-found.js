import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href={"/"}>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
