import React from 'react';
import { Star } from 'lucide-react';
import { AppData } from '../types';

interface AppCardProps {
  app: AppData;
  onClick: (app: AppData) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div 
      onClick={() => onClick(app)}
      className="flex flex-col w-full cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200"
    >
      <div className="relative w-full aspect-square mb-3">
        <img 
          src={app.icon} 
          alt={app.title} 
          className="w-full h-full object-cover rounded-2xl shadow-sm border border-gray-100"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-gray-900 truncate">{app.title}</h3>
        <p className="text-xs text-gray-500 truncate">{app.category}</p>
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-600">{app.rating}</span>
          <Star className="w-3 h-3 fill-current text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export const AppListItem: React.FC<AppCardProps> = ({ app, onClick }) => {
    return (
        <div 
            onClick={() => onClick(app)}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer"
        >
            <img src={app.icon} alt={app.title} className="w-16 h-16 rounded-xl shadow-sm" />
            <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900">{app.title}</h3>
                <p className="text-sm text-gray-500">{app.category} • {app.rating} ★</p>
                <p className="text-xs text-gray-400">Installed</p>
            </div>
        </div>
    )
}