import { Bell, ChevronDown, Mail, Moon, Sun, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Redux/slice/themeSlice';
import { logout } from '../../Redux/slice/authSlice';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
// import { RootState, AppDispatch } from './store';

export default function Header() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors duration-200">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Dashboard
            </Link>
            <div className="flex items-center space-x-4">
                <LanguageSelector />
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                    <Bell size={20} />
                </button>
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                    <Mail size={20} />
                </button>
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="relative group">
                    <button className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2">{user?.email}</span>
                        <ChevronDown size={16} />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                        <button
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                        >
                            <LogOut size={16} className="inline mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
