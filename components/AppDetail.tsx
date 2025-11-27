import React, { useState } from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { AppData } from '../types';

interface AppDetailProps {
  app: AppData;
  onBack: () => void;
}

export const AppDetail: React.FC<AppDetailProps> = ({ app, onBack }) => {
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = () => {
    setIsInstalling(true);
    setTimeout(() => {
      setIsInstalling(false);
      if (app.id === 'clash-royale') {
        // Open in new tab to ensure browser security policies don't block the download
        // and to isolate any potential certificate errors from the main app
        window.open('https://drive.google.com/uc?export=download&id=1eVVfdZ3G9EeAYdVXtXsbA2lCYu1KMqox', '_blank');
      } else {
        alert(`${app.title} foi instalado!`);
      }
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen pb-10 animate-fade-in">
      {/* Navbar for Detail View */}
      <nav className="sticky top-0 bg-white z-40 flex items-center px-4 py-4 shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </nav>

      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="px-6 pt-4 pb-6">
          <div className="flex gap-6">
            <img 
              src={app.icon} 
              alt={app.title} 
              className="w-24 h-24 rounded-2xl shadow-md border border-gray-100 flex-shrink-0"
            />
            <div className="flex flex-col justify-center gap-1.5">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">{app.title}</h1>
              <p className="text-[#01875f] font-medium text-sm">{app.developer}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex items-center justify-between mt-8 px-2">
              {/* Ratings */}
              <div className="flex flex-col items-center gap-1 border-r border-gray-200 flex-1">
                  <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-800">{app.rating}</span>
                      <Star className="w-3 h-3 fill-current text-gray-800" />
                  </div>
                  <span className="text-xs text-gray-500">{app.reviews} avaliações</span>
              </div>
              
              {/* Downloads */}
              <div className="flex flex-col items-center gap-1 border-r border-gray-200 flex-1">
                  <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-800">{app.downloads}</span>
                  </div>
                  <span className="text-xs text-gray-500">Downloads</span>
              </div>

              {/* Age Rating */}
              <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="font-bold text-gray-800">{app.ratedFor}</span>
                  <span className="text-xs text-gray-500">Classificação {app.ratedFor}</span>
              </div>
          </div>

          {/* Install Button */}
          <div className="mt-8 w-full">
              <button 
                  onClick={handleInstall}
                  disabled={isInstalling}
                  className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                      isInstalling 
                      ? 'bg-gray-100 text-gray-400' 
                      : 'bg-[#01875f] text-white hover:bg-[#006e4c] shadow-md hover:shadow-lg'
                  }`}
              >
                  {isInstalling ? 'Instalando...' : 'Instalar'}
              </button>
          </div>
        </div>

        {/* About Section */}
        <div className="px-6 mt-6 mb-10">
          <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-900">Sobre este jogo</h2>
              <ArrowLeft className="w-5 h-5 text-gray-500 rotate-180" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
              {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};