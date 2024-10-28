import { Home, Search, BookOpen, User, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function MobileNav() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
            <div className="flex justify-around items-center h-16">
                <a href="/" className={`flex flex-col items-center ${isActive('/') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    <Home className="h-6 w-6" />
                    <span className="text-xs mt-1">Home</span>
                </a>
                <a href="/schemes" className={`flex flex-col items-center ${isActive('/schemes') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    <BookOpen className="h-6 w-6" />
                    <span className="text-xs mt-1">Schemes</span>
                </a>
                <a href="/search" className={`flex flex-col items-center ${isActive('/search') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    <Search className="h-6 w-6" />
                    <span className="text-xs mt-1">Search</span>
                </a>
                <a href="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    <User className="h-6 w-6" />
                    <span className="text-xs mt-1">Profile</span>
                </a>
            </div>
        </div>
    );
}