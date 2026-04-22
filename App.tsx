import React, { useState } from 'react';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';
import { AppDetail } from './components/AppDetail';
import { APPS } from './constants';
import { AppData } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [activeTab, setActiveTab] = useState<'games' | 'apps'>('games');

  // Filter apps based on search
  const filteredApps = APPS.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchTerm) return matchesSearch;
    const isGame = app.type !== 'app'; // default to games if not set
    return activeTab === 'games' ? isGame : !isGame;
  });

  const handleAppClick = (app: AppData) => {
    setSelectedApp(app);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedApp(null);
  };

  // If an app is selected, show Detail View
  if (selectedApp) {
    return <AppDetail app={selectedApp} onBack={handleBack} />;
  }

  // Otherwise show Home / Search View
  return (
    <div className="min-h-screen bg-white">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        showBack={false}
      />

      {!searchTerm && (
        <div className="max-w-3xl mx-auto px-6 mt-4 border-b border-gray-200 flex gap-8">
          <button 
            className={`pb-3 font-medium text-sm transition-colors relative ${activeTab === 'games' ? 'text-[#01875f]' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('games')}
          >
            Jogos
            {activeTab === 'games' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#01875f] rounded-t-full" />
            )}
          </button>
          <button 
            className={`pb-3 font-medium text-sm transition-colors relative ${activeTab === 'apps' ? 'text-[#01875f]' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('apps')}
          >
            Apps
            {activeTab === 'apps' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#01875f] rounded-t-full" />
            )}
          </button>
        </div>
      )}
      
      <main className="pb-8 pt-6 max-w-3xl mx-auto">
        {/* Results Grid */}
        {filteredApps.length > 0 ? (
           <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 px-6">
             {filteredApps.map(app => (
               <AppCard key={app.id} app={app} onClick={handleAppClick} />
             ))}
           </div>
        ) : (
            <div className="flex flex-col items-center justify-center mt-20 text-gray-500 px-10 text-center">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <p>Nenhum resultado encontrado para "{searchTerm}"</p>
            </div>
        )}
      </main>
    </div>
  );
}

export default App;