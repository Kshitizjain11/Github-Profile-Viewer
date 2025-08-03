import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black">
      <h1 className="text-2xl font-semibold font-mono tracking-widest mb-4 text-gray-500">
        USER NOT FOUND
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="max-w-md w-full">
          <img
            src="https://rawcdn.githack.com/arunpariyar/404-page/86096ecec1b535b4e9281d5c734c5eae6fecf585/src/assets/Scarecrow.png"
            alt="Not Found Illustration"
            className="w-full object-contain"
          />
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono leading-tight">
            We couldn't find the GitHub user you were looking for!!
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-mono">
            The username might be incorrect, or the profile no longer exists.<br />
            Please double-check and try again.
          </p>
          <button
            className="bg-black text-white px-6 py-3 uppercase tracking-wide font-mono hover:bg-gray-800 transition"
            onClick={() => navigate("/")}
          >
            Search Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
