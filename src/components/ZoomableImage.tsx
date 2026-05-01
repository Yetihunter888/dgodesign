import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function ZoomableImage({ src, alt, className = "", referrerPolicy }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.img
        layoutId={`zoom-image-${src}`}
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsOpen(true)}
        referrerPolicy={referrerPolicy}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50 flex items-center justify-center"
              aria-label="Close image"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <motion.img
              layoutId={`zoom-image-${src}`}
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy={referrerPolicy}
              onClick={(e: React.MouseEvent) => e.stopPropagation()} // Prevent clicking image from closing it immediately if we wanted to add controls, though closing on click is fine too
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
