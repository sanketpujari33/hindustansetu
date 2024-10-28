import { motion } from 'framer-motion';
// import { Job } from './jobSlice';

export default function JobList({ jobs, filter }) {
    const filteredJobs = jobs.filter(
        (job) =>
            job.title.toLowerCase().includes(filter.toLowerCase()) ||
            job.company.toLowerCase().includes(filter.toLowerCase()) ||
            job.location.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            {filteredJobs.map((job, index) => (
                <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition-shadow"
                >
                    <h2 className="text-xl font-semibold dark:text-white">{job.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-400">{job.location}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Status: {job.status}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}
