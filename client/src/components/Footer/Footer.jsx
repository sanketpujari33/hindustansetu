import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900 pt-12 pb-8 px-4 hidden md:block">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">GovConnect</h3>
                        <p className="dark:text-gray-400 text-gray-600">Making government schemes accessible to everyone.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-indigo-400"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-indigo-400"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-indigo-400"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-indigo-400"><Mail className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">About Us</a></li>
                            <li><a href="/contact" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">Contact</a></li>
                            <li><a href="/faq" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">FAQ</a></li>
                            <li><a href="/privacy" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="/schemes/education" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">Education</a></li>
                            <li><a href="/schemes/healthcare" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">Healthcare</a></li>
                            <li><a href="/schemes/agriculture" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">Agriculture</a></li>
                            <li><a href="/schemes/housing" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900">Housing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="dark:text-gray-400 text-gray-600 mb-4">Stay updated with new schemes and opportunities.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="dark:bg-gray-800 bg-gray-200 dark:text-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                            />
                            <button className="dark:bg-indigo-600 bg-indigo-700 px-4 py-2 rounded-r-md dark:hover:bg-indigo-700 hover:bg-indigo-800">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t dark:border-gray-800 border-gray-300 mt-8 pt-8 text-center dark:text-gray-400 text-gray-600">
                    <p>&copy; 2024 GovConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
}