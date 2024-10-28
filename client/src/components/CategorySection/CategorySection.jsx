import { Book, Heart, Home, Briefcase, Sprout, Shield } from 'lucide-react';

const categories = [
    { icon: Book, name: 'Education', count: 45, color: 'bg-blue-100 text-blue-600' },
    { icon: Heart, name: 'Healthcare', count: 32, color: 'bg-red-100 text-red-600' },
    { icon: Home, name: 'Housing', count: 28, color: 'bg-green-100 text-green-600' },
    { icon: Briefcase, name: 'Employment', count: 37, color: 'bg-purple-100 text-purple-600' },
    { icon: Sprout, name: 'Agriculture', count: 24, color: 'bg-yellow-100 text-yellow-600' },
    { icon: Shield, name: 'Social Security', count: 19, color: 'bg-indigo-100 text-indigo-600' },
];

export default function CategorySection() {
    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Browse by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                            >
                                <category.icon className="h-6 w-6 text-white dark:text-gray-950" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} schemes</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}