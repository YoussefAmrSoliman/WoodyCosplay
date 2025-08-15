"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className=" ">
      <section className="relative w-full
      h-screen overflow-hidden max-h-1080">
      {!isLoaded && <div className="flex justify-center items-center 
      h-screen z-20">
      <video 
        src="/loading.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-24 h-24"
        />
    </div>}
      <div className={`absolute inset-0
        ${isLoaded ? "max-h-screen " : "max-h-0 overflow-hidden"} 
        transition-all duration-500`}>
        <Image
          src={"/Hero.png"}
          alt="Woody Cosplay"
          fill
          sizes="100vw"
          className={`object-cover [object-position:top] 
            transition-all duration-1000`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl">
        <div className="overflow-hidden flex justify-center items-center mt-4">
        <h1 className=" font-bold text-gray-100
        animate-fadeIn whitespace-nowrap text-[min(4vw,40px)]"
        >Welcome to Woody Cosplay</h1>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="py-16">


        <div className="flex flex-row justify-between items-center px-36"> 
          <div className="flex flex-col justify-center items-center mb-8 max-w-[400px]">
            <h3 className="text-2xl font-extrabold text-gray-400">Bring Your Favorite Characters to Life</h3>
            <p className="text-gray-200 mt-2">Custom-crafted cosplay costumes, props, and accessories
               — handmade with precision, passion, and screen-accurate detail. Whether you’re 
               prepping for Comic-Con, a photoshoot, or your next epic TikTok reveal,
                we make your cosplay dreams a reality.
            </p>
          </div>
          <div className="container max-w-[400px] max-h-[600px] rounded-4xl overflow-hidden">
            <Image
              src="/first_section.jpeg"
              alt="First Section Image"
              width={852}
              height={1280}
              
            />

          </div>

        </div>
      </section>

      <section className="py-16">


        <div className="flex flex-row justify-between items-center px-36"> 
          <div className="container max-w-[400px] max-h-[600px] rounded-4xl overflow-hidden">
            <Image
              src="/second_section.jpeg"
              alt="Second Section Image"
              width={852}
              height={1280}
              
            />

          </div>
          <div className="flex flex-col justify-center items-center mb-8 max-w-[400px]">
            <h3 className="text-2xl font-extrabold text-gray-400">Your character. Your story. Your moment.</h3>
            <p className="text-gray-200 mt-2">From anime icons to legendary heroes,
               we handcraft cosplay costumes and props so real,
                you’ll feel like you just walked off the set.
                 Battle-ready armor, intricate gowns, screen-accurate props — all made to fit you perfectly.
            </p>
          </div>
          

        </div>
      </section>
    </main>
  );
}
