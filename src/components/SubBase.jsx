import { FaGlobe } from "react-icons/fa";
import { useEffect, useRef } from "react";

const SubBase = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 80;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.2 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative bg-[#15002B] py-16 px-6 sm:px-8 overflow-hidden">
      {/* Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>

      {/* Content */}
      <div className="relative max-w-4xl text-left space-y-8 z-10 ml-0 sm:ml-12">
        {/* 👆 mobile has no margin-left, desktop keeps ml-12 */}

        <p className="text-lg sm:text-2xl text-gray-200 leading-relaxed">
          Based in Akure, Nigeria, we’re a{" "}
          <span className="text-purple-400 font-semibold">creative</span> ICT{" "}
          <span className="inline-block text-purple-400 animate-spin-slow">
            <FaGlobe />
          </span>{" "}
          partner that combines design, technology, and strategy to help
          businesses grow with confidence.
        </p>
        <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
          From <span className="text-gray-400 font-semibold">UI/UX design</span>{" "}
          to <span className="text-gray-400 font-semibold">full product</span>{" "}
          and{" "}
          <span className="text-gray-400 font-semibold">
            website development
          </span>
          , we work hand-in-hand with startups, brands, and organizations to
          turn ideas into reliable products people can use.
        </p>
      </div>

      {/* Custom slow spin */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SubBase;
