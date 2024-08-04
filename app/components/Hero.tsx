import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => (
  <section className="relative w-full">
    <div className=" aspect-[6/7]">
      <Image
        src="/rimuru.png"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      ></Image>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 50%)",
        }}
      ></div>
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 uppercase tracking-wider">
        Explore Glossary
      </button>
    </div>
  </section>
);

export default HeroSection;
