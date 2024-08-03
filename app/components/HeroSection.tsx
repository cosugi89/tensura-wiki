import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => (
  <section className="relative w-full">
    <div className=" aspect-[6/7]">
      <Image
        src="https://pbs.twimg.com/media/Fq838YwaMAEmnC7?format=jpg&name=large"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      ></Image>
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 uppercase tracking-wider">
        Explore Glossary
      </button>
    </div>
  </section>
);

export default HeroSection;
