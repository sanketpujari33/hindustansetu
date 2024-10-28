import { motion } from 'framer-motion';
import { Bookmark, Trash2 } from 'lucide-react';

const savedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'WebTech Inc.', location: 'New York, NY' },
    { id: 2, title: 'Data Scientist', company: 'AI Solutions', location: 'San Francisco, CA' },
    { id: 3, title: 'UX Designer', company: 'DesignPro', location: 'Los Angeles, CA' },
];

export default function SavedJobs() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">Saved Jobs</h1>
            <div className="space-y-4">
                {savedJobs.map((job) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-xl font-semibold mb-2 dark:text-white">{job.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-1">{job.company}</p>
                            <p className="text-gray-500 dark:text-gray-400">{job.location}</p>
                        </div>
                        <div className="flex space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                            >
                                <Bookmark size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                            >
                                <Trash2 size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
