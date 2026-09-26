import Link from "next/link";

const notFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-8xl font-bold text-[#ccff00]">404</h1>

      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

      <p className="text-gray-400 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block bg-[#ccff00] px-6 py-3 text-black font-bold rounded-2xl"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default notFoundPage;
