import { Users, FileCheck, Award, Building } from 'lucide-react';

const stats = [
    { icon: Users, label: 'Active Users', value: '2M+' },
    { icon: FileCheck, label: 'Schemes Available', value: '500+' },
    { icon: Award, label: 'Success Stories', value: '50K+' },
    { icon: Building, label: 'Partner Institutions', value: '100+' },
];

export default function StatisticsSection() {
    return (
        <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-200 rounded-full mb-4">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}