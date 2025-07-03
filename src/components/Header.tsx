"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Lumique Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <Image
              src="/logoName.png"
              alt="Lumique"
              width={100}
              height={24}
              className="transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-neutral-600 hover:text-neutral-900 transition-colors hover-lift"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-neutral-600 hover:text-neutral-900 transition-colors hover-lift"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="text-neutral-600 hover:text-neutral-900 transition-colors hover-lift"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-primary hover:scale-105 transform transition-transform"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-neutral-900 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-neutral-900 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-neutral-900 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-x-0 top-20 glass-effect border-b border-neutral-100 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="container mx-auto px-4 py-6 space-y-4">
            <li>
              <Link
                href="/"
                className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-block text-lg btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
