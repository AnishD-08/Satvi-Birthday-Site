import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { img: "/images/satvi1.jpg", text: "✨ Happy Birthday Satvi ✨", duration: 5000 },
  { img: "/images/satvi2.jpg", text: "💖 Meri Pyaari Behena 💖", duration: 5000 },
  { img: "/images/satvi3.jpg", text: "🔥 Mahila Mandal OP 🔥", duration: 5000 },
  { img: "/images/satvi4.jpg", text: "🥹 9th Ki Yaadien 🥹", duration: 5000 },
  { img: "/images/satvi5.jpg", text: "🍻 Bhaang Ki Nashedi 😂🍻", duration: 5000 },
  { img: "/images/photo1.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo2.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo3.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo4.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo5.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo6.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo7.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo8.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo9.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo10.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo11.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo12.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo13.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo14.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo15.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo16.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo17.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo18.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo19.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo20.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo21.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo22.jpg", text: "Purani Yaadein", duration: 5000 },
  { img: "/images/photo23.jpg", text: "Purani Yaadein", duration: 5000 },

  { img: "/images/satvi6.png", text: "😊 Samjhi ki nahii? 😊", duration: 10000 },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);

  // autoplay slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);
    useEffect(() => {
    let timeout;

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
        timeout = setTimeout(nextSlide, slides[(index + 1) % slides.length].duration);
    };

    timeout = setTimeout(nextSlide, slides[index].duration);

    return () => clearTimeout(timeout);
    }, [index]);


  // play background music
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden gradient-bg">

      {/* Background blurred image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`bg-${index}`}
          src={slides[index].img}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Foreground centered image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`fg-${index}`}
          src={slides[index].img}
          alt="Slide"
          className="relative z-10 mx-auto block w-[90%] h-[60%] sm:w-[80%] sm:h-[70%] md:w-[70%] md:h-[75%] object-cover rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 1.1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Caption text */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={slides[index].text}
          className="absolute bottom-24 sm:bottom-10 text-center w-full font-extrabold text-2xl sm:text-3xl md:text-5xl text-transparent bg-clip-text animate-gradient z-20"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.2, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {slides[index].text}
        </motion.h2>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute bottom-10 left-1/4 sm:bottom-auto sm:left-10 text-white text-2xl sm:text-4xl bg-black/50 p-2 sm:p-3 rounded-full z-20"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        className="absolute bottom-10 right-1/4 sm:bottom-auto sm:right-10 text-white text-2xl sm:text-4xl bg-black/50 p-2 sm:p-3 rounded-full z-20"
      >
        <FaArrowRight />
      </button>

      {/* Background music */}
      <audio ref={audioRef} src="/GallanGoodiyaan.mp3" loop autoPlay />
    </div>
  );
}
