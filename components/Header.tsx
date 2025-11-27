import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onBack?: () => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, onBack, showBack }) => {
  return (
    <header className="sticky top-0 z-50 bg-white p-4 shadow-sm">
      <div className="max-w-3xl mx-auto w-full">
        {/* Search Input Container */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 shadow-inner">
          {showBack ? (
              <button onClick={onBack} className="mr-3">
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
          ) : (
              <Search className="w-5 h-5 text-gray-500 mr-3" />
          )}
          
          <input
            type="text"
            placeholder="Pesquisar apps e jogos"
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
              <button onClick={() => onSearchChange('')} className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
          )}
        </div>
      </div>
    </header>
  );
};