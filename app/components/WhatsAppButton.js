'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        w-14 h-14
        rounded-full
        bg-green-500 text-white
        shadow-xl
        flex items-center justify-center
        hover:scale-110
        hover:bg-green-600
        transition-all duration-300
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}