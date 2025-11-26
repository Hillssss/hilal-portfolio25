"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CircularClock = () => {
  const [time, setTime] = useState(new Date());
  const [totalSeconds, setTotalSeconds] = useState(0); // untuk rotasi akumulatif

  useEffect(() => {
    const now = new Date();
    // Hitung total detik sejak jam 00:00:00 hari ini (atau cukup sejak mount)
    const initialTotalSeconds =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    setTotalSeconds(initialTotalSeconds);

    const i = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      setTotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(i);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const month = time.getMonth();
  const weekday = time.getDay();
  const date = time.getDate();

  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  const isNovember = month === 10; // JavaScript months are 0-indexed

  // Warna utama berdasarkan bulan
  const dateColor = isNovember ? "text-red-400 drop-shadow-[0_0_12px_#ff0000]" : "text-cyan-300";

  return (
    <div className="relative w-[380px] h-[380px] mx-auto select-none rounded-full flex items-center justify-center bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_#0ff] overflow-hidden font-mono">
      
      {/* Partikel detik kecil (60 titik) */}
      {Array.from({ length: 60 }).map((_, i) => {
        const isMajor = i % 5 === 0; // setiap 5 detik = lebih besar
        return (
          <div
            key={i}
            className={`absolute rounded-full ${isMajor ? "w-1.5 h-1.5 bg-cyan-300/70" : "w-0.5 h-0.5 bg-white/30"}`}
            style={{
              transform: `rotate(${i * 6}deg) translateY(-165px) rotate(-${i * 6}deg)`,
            }}
          />
        );
      })}

      {/* DATE (di bagian bawah tengah) */}
      <motion.div
        className={`absolute bottom-[22%] text-3xl font-bold tracking-wider ${dateColor}`}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {date}
      </motion.div>

      {/* Jarum Jam (Hour) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: hours * 30 + minutes * 0.5 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="w-[6px] h-[75px] bg-white rounded-full origin-bottom shadow-[0_0_8px_white]" />
      </motion.div>

      {/* Jarum Menit (Minute) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: minutes * 6 }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        <div className="w-[3px] h-[110px] bg-yellow-300 rounded-full origin-bottom shadow-[0_0_10px_#ff0]" />
      </motion.div>

      {/* Jarum Detik (Second) – SEKARANG MULUS! */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: totalSeconds * 6 }}
        transition={{ type: "tween", duration: 1, ease: "linear" }}
      >
        <div className="w-[2px] h-[130px] bg-red-500 rounded-full origin-bottom shadow-[0_0_12px_red]" />
      </motion.div>

      {/* Center Dot */}
      <div className="absolute w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_#0ff]" />

      {/* Angka Jam (1–12) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const index = i + 1;
        const angle = index * 30;
        const active = (hours % 12 || 12) === index;
        return (
          <div
            key={index}
            className={`absolute text-sm font-bold tracking-wide pointer-events-none
              ${active
                ? "text-red-500 scale-125 drop-shadow-[0_0_10px_#00faff]"
                : "text-white/50"
              }`}
            style={{
              transform: `rotate(${angle}deg) translateY(-177px) rotate(-${angle}deg)`,
            }}
          >
            {index}
          </div>
        );
      })}

      {/* Bulan (Jan–Dec) */}
      {months.map((m, i) => {
        const active = i === month;
        return (
          <motion.div
            key={i}
            className={`absolute text-xs tracking-widest pointer-events-none
              ${active
                ? "text-red-400 font-bold drop-shadow-[0_0_6px_#ff0000]"
                : "text-white/40"
              }`}
            style={{
              transform: `rotate(${i * 30}deg) translateY(-145px) rotate(-${i * 30}deg)`,
            }}
          >
            {m}
          </motion.div>
        );
      })}

      {/* Hari (Sun–Sat) */}
      {days.map((d, i) => {
        const active = i === weekday;
        return (
          <motion.div
            key={i}
            className={`absolute text-[10px] tracking-widest pointer-events-none
              ${active
                ? isNovember
                  ? "text-red-400 drop-shadow-[0_0_6px_#ff0000] font-bold"
                  : "text-yellow-300 drop-shadow-[0_0_6px_#ffff00] font-bold"
                : "text-white/50"
              }`}
            style={{
              transform: `rotate(${i * (360 / 7)}deg) translateY(-115px) rotate(-${i * (360 / 7)}deg)`,
            }}
          >
            {d}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CircularClock;