import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import CategorySection from '../../components/CategorySection/CategorySection';
import StatisticsSection from '../../components/StatisticsSection/StatisticsSection';
import SchemeCard from '../../components/SchemeCard/SchemeCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MobileNav from '../../components/Navbar/MobileNav';

const featuredSchemes = [
    {
        title: "PM Kisan Samman Nidhi",
        category: "Agriculture",
        deadline: "March 31, 2024",
        eligibility: "Small & Marginal Farmers",
        imageUrl: "https://images.unsplash.com/photo-1595974482597-4b8dc7b8d1c9?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "National Education Scholarship",
        category: "Education",
        deadline: "April 15, 2024",
        eligibility: "Students (Class 9-12)",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Pradhan Mantri Awas Yojana",
        category: "Housing",
        deadline: "May 30, 2024",
        eligibility: "Low & Middle Income Groups",
        imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000"
    }
];

export default function Home() {
    return (
        <>

            <Hero />

            <CategorySection />

            <StatisticsSection />

            {/* Featured Schemes Section */}
            <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Featured Schemes
                        </h2>
                        <Link
                            to="/schemes"
                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center"
                        >
                            View All Schemes
                            <svg
                                className="ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredSchemes.map((scheme, index) => (
                            <SchemeCard key={index} {...scheme} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-700 dark:bg-gray-700 py-16 transition-colors mb-9 duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Explore Government Schemes?
                        </h2>
                        <p className="text-indigo-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of citizens who have already benefited from various government initiatives.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link
                                to="/signup"
                                className="bg-white text-indigo-600 dark:bg-gray-300 dark:text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 dark:hover:bg-gray-400 transition-colors"
                            >
                                Create Account
                            </Link>
                            <Link
                                to="/schemes"
                                className="border-2 border-white text-white dark:border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-indigo-600 dark:hover:bg-gray-600 transition-colors"
                            >
                                Browse Schemes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}