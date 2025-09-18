import { motion } from "framer-motion";

export default function OpenButton({ onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      className="px-6 py-3 bg-pink-600 text-white text-lg font-bold rounded-xl shadow-lg hover:scale-110 transition"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      Open Your Message 🎁
    </motion.button>
  );
}
