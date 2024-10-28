import { Search, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode state
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Update document class based on dark mode state
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="relative h-screen bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-gray-900 dark:to-gray-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">


                    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                        Discover Government Schemes Made Simple
                    </h1>
                    <p className="text-xl text-indigo-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Explore thousands of government schemes and services designed to support and empower citizens.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for schemes, services, or categories..."
                                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white dark:bg-gray-700 dark:text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-gray-500"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 dark:bg-gray-700 rounded-full hover:bg-indigo-700 dark:hover:bg-gray-600">
                                <Search className="h-5 w-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
