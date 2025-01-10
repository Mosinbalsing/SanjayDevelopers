import { Facebook, Twitter, Linkedin, Instagram, Phone, Youtube, PhoneIcon as WhatsApp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialLinks() {
  return (
    <div className="fixed right-0 top-[70%] -translate-y-1/2 flex flex-col gap-1.5 z-40">
      <Link
        to="/"
        className="bg-[#25D366] p-1.5 text-white hover:bg-[#128C7E] transition-colors"
        aria-label="WhatsApp"
      >
        <WhatsApp size={20} />
      </Link>
      <Link
        to="/"
        className="bg-red-600 p-1.5 text-white hover:bg-red-700 transition-colors"
        aria-label="Phone"
      >
        <Phone size={20} />
      </Link>
      <Link
        to="/"
        className="bg-red-600 p-1.5 text-white hover:bg-red-700 transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </Link>
      <Link
        to="/"
        className="bg-blue-600 p-1.5 text-white hover:bg-blue-700 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </Link>
      <Link
        to="/"
        className="bg-blue-400 p-1.5 text-white hover:bg-blue-500 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </Link>
      <Link
        to="/"
        className="bg-blue-700 p-1.5 text-white hover:bg-blue-800 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        to="/"
        className="bg-pink-600 p-1.5 text-white hover:bg-pink-700 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </Link>
    </div>
  );
}
