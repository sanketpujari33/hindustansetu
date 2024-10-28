import { useState } from 'react';
import { Sun, Moon, Bell, User, Menu, X } from 'lucide-react';
import { toggleTheme } from '../../Redux/slice/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import HINDUSTANSETULOGO from '../../assets/HINDUSTANSETULOGO.png'; // Update the path according to your project structure

export default function Navbar() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
        document.body.className = theme === 'light' ? 'dark' : 'light';
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo Section */}
                        <img
                            src={HINDUSTANSETULOGO}
                            alt="Logo"
                            className="h-8 w-8 bg-transparent" // Ensure the background is transparent
                            style={{ backgroundColor: 'transparent' }} // Ensure inline style for extra clarity
                        />
                        <div className="flex-shrink-0 font-bold text-xl ml-2 bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
                            HINDUSTANSETU
                        </div>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-4">
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Schemes</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Services</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={handleToggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Notifications">
                            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="User profile">
                            <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Schemes</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Services</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center px-5 space-x-3">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="User profile">
                            <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Notifications">
                            <Bell className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button
                            onClick={handleToggleTheme}
                            className="theme-toggle p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
