import { useState } from 'react';
import { Network, Menu, X } from 'lucide-react';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Skills', page: 'skills' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 text-cyan-400 font-bold text-lg tracking-tight hover:text-cyan-300 transition-colors"
        >
          <Network className="w-6 h-6" />
          <span>Youssef</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === page
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-3 flex flex-col gap-1">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all ${
                currentPage === page
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
