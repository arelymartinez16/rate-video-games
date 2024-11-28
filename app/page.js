"use client";

import Image from "next/image";
import { lusitana } from "./fonts/fonts";
import { MdOutlineVideogameAsset } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  const handleScrollToFeatures = (e) => {
    e.preventDefault();
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <header className="flex flex-col items-center justify-center">
          <MdOutlineVideogameAsset className="text-9xl text-blue-500" />
          <h1 className="text-4xl font-bold">
            Welcome to <span className={lusitana.className}>Game Insider</span>
          </h1>
          <p className="text-lg mt-4">Your trusted source for in-depth game reviews and ratings.</p>
          <Link href="#features" onClick={handleScrollToFeatures} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">Get Started</Link>
        </header>
      </div>

      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">In-depth Reviews</h3>
            <p>Detailed reviews of the latest games.</p>
          </div>
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">User Ratings</h3>
            <p>See what other gamers think.</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <p>"Game Insider is my go-to source for game reviews!"</p>
            <p className="mt-2 font-bold">- Gamer123</p>
          </div>
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <p>"I love the detailed reviews and user ratings."</p>
            <p className="mt-2 font-bold">- PlayerOne</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us</h2>
        <p className="text-lg mb-8">Become a part of our gaming community.</p>
        <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</Link>
      </section>
    </>
  );
}
