import { Calendar, Users, ArrowRight, Bookmark } from 'lucide-react';

export default function SchemeCard({ title, category, deadline, eligibility, imageUrl }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative h-48">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="text-sm">Deadline: {deadline}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="text-sm">{eligibility}</span>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-500 font-medium flex items-center">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                        <Bookmark className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>

    );
}
