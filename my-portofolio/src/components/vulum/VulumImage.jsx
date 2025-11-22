import { motion } from "framer-motion";

function VulumImage({ img, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 50, filter: "blur(10px)" }} // Starts blurred, low, and invisible
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }} // Ends sharp, at final spot, visible
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="d-flex flex-column gap-3 align-items-center">
        <img src={img} alt={text} className="w-75 rounded-4" />
        <p className="text-white text-center px-4">{text}</p>
      </div>
    </motion.div>
  );
}

export default VulumImage;
