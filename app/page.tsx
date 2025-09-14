// import Image from "next/image";
"use client"
import { Carousel } from "./componentss/Carousel";
import { Generate } from "./componentss/Generate";
import Navbar from "./componentss/Navbar";
import FooterBar from "./componentss/FooterBar";
import { useEffect } from "react";

export default function Home() {
// e.g. in _app.tsx or a root client component
useEffect(() => {
  // Apply zoom (non-standard but widely supported except Firefox)
  (document.documentElement.style).zoom = "0.8";

  return () => {
    (document.documentElement.style).zoom = "";
  };
}, []);

  return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition">
      <Navbar />
      <div className=" text-gray-800 dark:text-white">
        {/* Your main page content */}
        {/* <h1 className="text-2xl font-bold">Welcome to your tech internship project!</h1> */}
        <Carousel/>
        <Generate />
        <FooterBar />
    </div>
    </main>
  );
}
