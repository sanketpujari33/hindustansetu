import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/slice/languageSlice';

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.language);

    const handleLanguageChange = (e) => {
        dispatch(setLanguage(e.target.value)); // Dispatch Redux action to update language
    };

    return (
        <select
            value={currentLanguage}
            onChange={handleLanguageChange}
            className="block w-full max-w-xs p-1 bg-white dark:bg-gray-800 dark:text-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out"
        >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
        </select>
    );
};

export default LanguageSelector;
