"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // メニューが開いているときは処理をスキップ
      if (isMenuOpen) return;

      // スクロール方向の判定
      if (currentScrollY > lastScrollY) {
        // 下スクロール
        setIsVisible(false);
      } else {
        // 上スクロール
        setIsVisible(true);
      }

      // 透明度の制御
      setIsScrolled(currentScrollY > 20);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white`}
    >
      <nav className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex items-center space-x-3 group pointer-events-auto"
            onClick={() => setIsMenuOpen(false)}
          >
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
            className={`md:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 pointer-events-auto ${
              isMenuOpen ? "bg-neutral-100" : "hover:bg-neutral-50"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-neutral-900 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-neutral-900 rounded-full transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-neutral-900 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ top: "5rem" }}
        >
          <div className="container h-full px-4 py-8 overflow-y-auto">
            <ul className="space-y-6 mb-20">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-xl text-neutral-900 hover:text-neutral-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-xl text-neutral-900 hover:text-neutral-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="flex items-center text-xl text-neutral-900 hover:text-neutral-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative group">
                    Works
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="pt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center text-xl btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="fixed bottom-8 inset-x-4">
              <div className="text-center text-neutral-500">
                <p className="text-sm mb-2">お問い合わせ</p>
                <a
                  href="mailto:koushin1022apple@gmail.com"
                  className="text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  koushin1022apple@gmail.com
                </a>
                <p className="text-sm mt-4 mb-2">所在地</p>
                <p className="text-neutral-900">東京都北区赤羽西6-16-4</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
