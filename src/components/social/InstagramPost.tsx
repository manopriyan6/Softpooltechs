import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Smartphone, Globe } from 'lucide-react';

const InstagramPost: React.FC = () => {
  return (
    <div className="w-[1080px] h-[1080px] bg-gray-900 relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-lime-500/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-16">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="mb-12"
        >
          <Code className="w-24 h-24 text-cyan-400" />
        </motion.div>

        {/* Main text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lime-400"
        >
          Transform Your Digital Presence
        </motion.h1>

        {/* Services icons */}
        <div className="flex space-x-12 mb-12">
          {[
            { icon: <Laptop className="w-16 h-16" />, label: "Web" },
            { icon: <Smartphone className="w-16 h-16" />, label: "Mobile" },
            { icon: <Globe className="w-16 h-16" />, label: "Digital" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="text-cyan-400 mb-2">{item.icon}</div>
              <span className="text-2xl font-medium text-white">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-3xl text-white text-center"
        >
          <p className="mb-4">Follow us for more</p>
          <p className="text-cyan-400 font-bold">@softpool.in</p>
        </motion.div>

        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-cyan-500/10"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramPost;