import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#090E16] text-gray-300 pt-12 pb-8 border-t border-[#1A1F2B] relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">quvonch.dev</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Men front-end dasturchiman. Zamonaviy, samarali va jozibali
            veb-ilovalarni yaratishga ixtisoslashganman.
          </p>
        </div>

        <div className="md:text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Navigatsiya
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                Men haqimda
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition-colors duration-300"
              >
                Loyihalar
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-white transition-colors duration-300"
              >
                Ko‘nikmalar
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-300"
              >
                Bog‘lanish
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-white mb-3">
            Bog‘lanish
          </h3>
          <div className="space-y-2">
            <a
              href="tel:+998901234567"
              className="flex items-center md:justify-end gap-2 hover:text-white transition-colors duration-300"
            >
              <Phone size={18} /> +998 90 123 45 67
            </a>
            <a
              href="mailto:youremail@example.com"
              className="flex items-center md:justify-end gap-2 hover:text-white transition-colors duration-300"
            >
              <Mail size={18} /> youremail@example.com
            </a>
          </div>

          <div className="flex md:justify-end gap-5 mt-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 border-t border-[#1F2533] pt-4 flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} quvonch.dev. Barcha huquqlar himoyalangan.</p>
        <p className="mt-2 md:mt-0">Made with ❤️ using React & Tailwind</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7B4AE2] to-transparent blur-md opacity-70"></div>
    </footer>
  );
}
