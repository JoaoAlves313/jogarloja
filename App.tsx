import React, { useState } from 'react';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';
import { AppDetail } from './components/AppDetail';
import { APPS } from './constants';
import { AppData } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  // Filter apps based on search
  const filteredApps = APPS.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      
      <main className="pb-8 pt-4 max-w-3xl mx-auto">
        {/* Games Header */}
        {!searchTerm && (
           <div className="px-6 mb-6">
             <h1 className="text-2xl font-bold text-gray-900">Jogos</h1>
           </div>
        )}

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