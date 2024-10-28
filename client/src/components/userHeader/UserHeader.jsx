import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { Moon, Sun } from 'lucide-react';
import { toggleTheme } from '../../Redux/slice/themeSlice';

export default function UserHeader() {
    const dispatch = useDispatch();
    // const darkMode = useSelector((state) => state.theme.darkMode);
    const darkMode = useSelector((state) => {
        console.log("Current darkMode state:", state.theme.darkMode); // Debugging log
        return state.theme.darkMode;
    });

    const handleToggle = () => {
        dispatch(toggleTheme()); // Dispatch the toggleTheme action
    };
    return (
        <header className="flex items-center justify-between px-4 py-6 sm:px-6 md:px-8 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-white">
                HINDUSTANSETU
            </Link>
            <div className="flex items-center space-x-4">
                <LanguageSelector />
                <button
                    onClick={handleToggle}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                    {darkMode ? <Sun size={30} /> : <Moon size={30} />}
                </button>
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="absolute top-4 right-4 p-2 bg-indigo-600 dark:bg-gray-700 rounded-full hover:bg-indigo-700 dark:hover:bg-gray-600 transition"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-100" />}
                </button>
            </div>
        </header>
    )
}
