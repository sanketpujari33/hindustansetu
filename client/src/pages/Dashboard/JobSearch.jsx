import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function JobSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', searchTerm, 'in', location);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">Job Search</h1>
            <form onSubmit={handleSearch} className="mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            What
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="search"
                                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Job title, keywords, or company"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Where
                        </label>
                        <input
                            type="text"
                            id="location"
                            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="City, state, or zip code"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="flex items-end">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Search
                        </motion.button>
                    </div>
                </div>
            </form>
            {/* Add job search results here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample job cards */}
                {[1, 2, 3, 4, 5, 6].map((job) => (
                    <motion.div
                        key={job}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: job * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-semibold mb-2 dark:text-white">Software Engineer</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">TechCorp</p>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">San Francisco, CA</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                            We are seeking a talented Software Engineer to join our dynamic team...
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Apply Now
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
