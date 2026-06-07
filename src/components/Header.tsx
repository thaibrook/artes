import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 bg-primary-500 `}>
              <span className=" font-bold text-sm text-white">B</span>
            </div>
            <span className={` text-xl font-semibold tracking-tight transition-colors duration-300 text-primary-500 `}>
              Papelaria Brooks
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-400/10 ${
                  scrolled
                    ? 'text-primary-800 hover:text-primary-500'
                    : 'text-white/90 hover:text-accent-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className={`p-2 rounded-full transition-all duration-300 hover:bg-primary-400/10 ${
              scrolled ? 'text-gray-600 hover:text-primary-500' : 'text-white/80 hover:text-primary-500'
            }`}>
              <Search size={20} />
            </button>
            <a href="https://wa.me/5592985019752" target="_blank" rel="noreferrer">
              <button className={`p-2 rounded-full transition-all duration-300 hover:bg-primary-400/10 relative ${
                scrolled ? 'text-gray-600 hover:text-primary-500' : 'text-white/80 hover:text-primary-500'
              }`}>
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-peach-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </a>
          </div>

         

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-primary-50 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-primary-50">
            <button className="p-2 text-gray-600 hover:text-primary-500 rounded-lg">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-500 rounded-lg relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-peach-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
