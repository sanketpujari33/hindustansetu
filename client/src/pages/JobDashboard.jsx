import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { setFilter, fetchJobs } from '../Redux/slice/jobSlice';
import JobList from '../components/JobList/JobList';

export default function JobDashboard() {
    const dispatch = useDispatch();
    const { jobs, filter, loading, error } = useSelector((state) => state.job);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const openJobs = jobs.filter((job) => job.status === 'open' || job.status === 'paused');
    const closedJobs = jobs.filter((job) => job.status === 'closed');

    return (
        <div className="p-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
            >
                <h1 className="text-2xl font-semibold mb-4 dark:text-white">Jobs</h1>
                <div className="flex space-x-2 mb-4">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-gray-700">All Jobs</button>
                    <button className="px-4 py-2 bg-white text-gray-800 rounded border dark:bg-gray-800 dark:text-white dark:border-gray-700">Tags</button>
                </div>
                <div className="flex space-x-2 mb-4">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-gray-700">
                        Open and paused ({openJobs.length})
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-800 rounded border dark:bg-gray-800 dark:text-white dark:border-gray-700">
                        Closed ({closedJobs.length})
                    </button>
                </div>
                <div className="flex space-x-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Filter and search jobs"
                            className="w-full pl-10 pr-4 py-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
                            value={filter}
                            onChange={(e) => dispatch(setFilter(e.target.value))}
                        />
                    </div>
                    <button className="px-4 py-2 bg-white text-gray-800 rounded border flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-700">
                        <Star className="mr-2" size={16} />
                        Starred
                    </button>
                </div>
            </motion.div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : error ? (
                <div className="text-red-500 text-center">{error}</div>
            ) : jobs.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center"
                >
                    <div className="w-1/2">
                        <img
                            src="/placeholder.svg?height=300&width=400"
                            alt="Person working on laptop"
                            className="w-full h-auto"
                        />
                    </div>
                    <Link
                        to="/post-job"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Post a job
                    </Link>
                </motion.div>
            ) : (
                <JobList jobs={jobs} filter={filter} />
            )}
        </div>
    );
}
