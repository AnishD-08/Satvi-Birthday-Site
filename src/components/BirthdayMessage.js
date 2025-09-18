import { motion } from "framer-motion";

import { useRef, useEffect } from "react";


export default function BirthdayMessage({ onNext }) {

    // const audioRef = useRef(null);
    // useEffect(() => {
    //     // play song only when this component mounts
    //     if (audioRef.current) {
    //         audioRef.current.play().catch(() => { });
    //     }
    // }, []);
    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-purple-700 drop-shadow-lg">
                🎉 Happy Birthday to my Dearest Sister Satvi 🎉
            </h1>
            <motion.button
                onClick={onNext}
                className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white text-base sm:text-lg rounded-xl shadow-lg hover:scale-110 transition"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                Get into the Lens 📸
            </motion.button>
            <p className="py-4 text-sm sm:text-sm md:text-xl font-semibold text-black-700 drop-shadow-lg">
                I just want to say that you are the most beautiful person in the world.
                You bring so much joy and happiness into my life.
                I love you more than words can say.
                Thank you for being such a special person to me.

                Enjoy music with images ahead, click on the Get into the Lens button
            </p>
            {/* Audio for birthday message */}
            {/* <audio ref={audioRef} src="/assets/music.mp3" loop /> */}
        </motion.div>
    );
}
