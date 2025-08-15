"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(entry.target.id);
            } else {
              newSet.delete(entry.target.id); // Remove when not visible
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '0px 0px -100px 0px' // Fade out earlier when scrolling away
      }
    );

    const sections = [section1Ref.current, section2Ref.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="">
      <section className="relative w-full
      h-screen overflow-hidden max-h-1080 mt-4 rounded-4xl">
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
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="overflow-hidden flex flex-col justify-center
                              items-center mt-4">
                <h1 className=" font-extrabold text-gray-100
                animate-fadeIn-1 whitespace-nowrap text-[min(4vw,40px)]"
                >Welcome to Woody Cosplay</h1>
                <p className="text-gray-200
                animate-fadeIn-2 whitespace-nowrap text-[min(2vw,25px)]">
                  where your favorite
                  characters come to life in every detail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={section1Ref}
        id="section1"
        className={`py-16 transition-all duration-700 ease-in-out ${
          visibleSections.has('section1')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-row justify-between items-center gap-12 px-36"> 
          <div className="flex flex-col justify-center items-center mb-8 max-w-[30vw] max-h-[80vh]">
            <h3 className="text-2xl font-extrabold text-gray-400">Bring Your Favorite Characters to Life</h3>
            <p className="text-gray-200 mt-2">Custom-crafted cosplay costumes, props, and accessories
               — handmade with precision, passion, and screen-accurate detail. Whether you're 
               prepping for Comic-Con, a photoshoot, or your next epic TikTok reveal,
                we make your cosplay dreams a reality.
            </p>
          </div>
          <div className="container max-w-[30vw] max-h-[80vh] min-w-[250px] rounded-4xl overflow-hidden">
            <Image
              src="/first_section.jpeg"
              alt="First Section Image"
              width={852}
              height={1280}
            />
          </div>
        </div>
      </section>

      <section 
        ref={section2Ref}
        id="section2"
        className={`py-16 transition-all duration-700 ease-in-out ${
          visibleSections.has('section2')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-row justify-between gap-12 items-center px-36"> 
          <div className="container max-w-[45vw] max-h-[50vh] min-w-[350px] rounded-4xl overflow-hidden">
            <Image
              src="/second_section.jpeg"
              alt="Second Section Image"
              width={1080}
              height={608}
            />
          </div>
          <div className="flex flex-col justify-center items-center mb-8 max-w-[30vw] max-h-[70vh]">
            <h3 className="text-2xl font-extrabold text-gray-400">Your character. Your story. Your moment.</h3>
            <p className="text-gray-200 mt-2">From anime icons to legendary heroes,
               we handcraft cosplay costumes and props so real,
                you'll feel like you just walked off the set.
                 Battle-ready armor, intricate gowns, screen-accurate props — all made to fit you perfectly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
