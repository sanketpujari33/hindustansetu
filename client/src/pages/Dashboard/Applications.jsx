import { motion } from 'framer-motion';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

const applications = [
    { id: 1, jobTitle: 'Software Engineer', company: 'TechCorp', status: 'Submitted', date: '2023-05-15' },
    { id: 2, jobTitle: 'Product Manager', company: 'InnovateCo', status: 'In Review', date: '2023-05-10' },
    { id: 3, jobTitle: 'Data Analyst', company: 'DataDriven', status: 'Rejected', date: '2023-05-05' },
    { id: 4, jobTitle: 'UX Designer', company: 'DesignPro', status: 'Accepted', date: '2023-05-01' },
];

const statusIcons = {
    Submitted: <Clock className="text-yellow-500" size={20} />,
    'In Review': <Clock className="text-blue-500" size={20} />,
    Rejected: <XCircle className="text-red-500" size={20} />,
    Accepted: <CheckCircle className="text-green-500" size={20} />,
};

export default function Applications() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">My Applications</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Job Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Company
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Date Applied
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {applications.map((application) => (
                            <motion.tr
                                key={application.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{application.jobTitle}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 dark:text-gray-300">{application.company}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {statusIcons[application.status]}
                                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">{application.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    {application.date}
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
