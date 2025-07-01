import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-8 h-8">
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
            className="hidden sm:block"
            priority
          />
          <span className="text-xl font-bold sm:hidden">Lumique</span>
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="hover:text-gray-600 transition-colors"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
