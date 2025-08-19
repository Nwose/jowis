import React from "react";
import { FaLightbulb, FaHourglassHalf, FaSearch } from "react-icons/fa";

export default function OurValues() {
  return (
    <section className="relative w-full h-[75vh] py-20 bg-[#140021] text-white overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 25 }).map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Glow behind heading */}
      <div
        className="absolute top-[80px] left-[20px] w-[350px] h-[150px] bg-no-repeat bg-contain opacity-70 z-0"
        style={{
          backgroundImage: `url('/Jowis-Pattern.png')`,
          top: "29%", // ⬅ Move image up/down (smaller % = higher)
          left: "calc(50% - 480px)", // Replace with your glow image
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center items-center h-full ">
        {/* Top: Heading + description */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 justify-center items-center w-full -pt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-200 mb-4 md:mb-0 text-center md:text-left">
            Our Values
          </h2>
          <p className="text-gray-300 md:max-w-2xl text-center md:text-left">
            We build tech solutions on principles that don’t change which are
            clarity, consistency, and care that you can count on.
          </p>
        </div>

        {/* Bottom: 3 value items */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              {/* Dotted pattern */}
              <div className="absolute inset-0 -top-3 -left-6 w-[80px] h-[40px] bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:8px_8px] opacity-40"></div>
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-purple-600 rounded">
                <FaLightbulb size={28} />
              </div>
            </div>
            <p className="text-gray-300">We fix problems & improve systems.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 -top-3 -left-6 w-[80px] h-[40px] bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:8px_8px] opacity-40"></div>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-purple-600 rounded">
                <FaHourglassHalf size={28} />
              </div>
            </div>
            <p className="text-gray-300">Our promises are our deadlines.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 -top-3 -left-6 w-[80px] h-[40px] bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:8px_8px] opacity-40"></div>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-purple-600 rounded">
                <FaSearch size={28} />
              </div>
            </div>
            <p className="text-gray-300">
              We turn complex tech into useful tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
