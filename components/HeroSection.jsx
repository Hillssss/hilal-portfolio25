import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Gambar Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/hilfix.JPG"
          alt="Profile"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Nama Bertingkat dengan Penyesuaian Posisi */}
      <div className="relative z-10 absolute top-[25%] left-[5%]">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[8vw] font-extrabold text-black uppercase leading-none ml-[-15vw]" // Geser lebih ke kiri
        >
          HILAL
        </motion.h1>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-[8vw] font-extrabold text-black uppercase leading-none mt-[-1vw] ml-[7vw]" // Tetap di tengah
        >
          HIBATULLAH
        </motion.h1>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-[8vw] font-extrabold text-black uppercase leading-none mt-[-1vw] ml-[49vw]" // Geser lebih ke kanan
        >
          AGUS
        </motion.h1>
      </div>

      {/* Deskripsi Kecil di Pojok Kanan Atas */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-[5%] right-[5%] text-lg text-black font-light"
      >
        Entrepreneur, Advisor & Investor
      </motion.p>
    </section>
  );
};

export default HeroSection;
