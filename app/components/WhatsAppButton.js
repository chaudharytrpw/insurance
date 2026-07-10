'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* Photo Frame */}
      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl bg-white">
        <Image
          src="/arvind.jpeg" // Put your image in public/profile.jpg
          alt="Profile"
          width={64}
          height={64}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918051266584"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          w-14 h-14
          rounded-full
          bg-green-500
          text-white
          shadow-xl
          flex items-center justify-center
          hover:scale-110
          hover:bg-green-600
          transition-all duration-300
        "
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}