import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export type Page = 'home' | 'skills' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Youssef Elsibaey Youssef. All rights reserved.</p>
      </footer>
    </div>
  );
}
