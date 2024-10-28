import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, ShoppingCart, Activity, TrendingUp, Zap, Calendar } from 'lucide-react';
import { fetchDashboardData } from '../../Redux/slice/dashboardSlice';
import { AppDispatch, RootState } from '../../Redux/store';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const iconMap = {
    'dollar-sign': DollarSign,
    'users': Users,
    'shopping-cart': ShoppingCart,
    'activity': Activity,
    'trending-up': TrendingUp,
    'zap': Zap,
};

const timeRanges = ['Today', 'This Week', 'This Month', 'This Quarter', 'This Year'];

export default function Dashboard() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.dashboard);
    const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        dispatch(fetchDashboardData(selectedTimeRange));
    }, [dispatch, selectedTimeRange]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
                />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center mt-8 bg-gray-100 dark:bg-gray-900 p-4">{error}</div>;
    }

    if (!data) {
        return null;
    }

    const tabContent = {
        overview: (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                    {data.statCards.map((card, index) => {
                        const Icon = iconMap[card.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.title}</div>
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                                        <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{card.value}</div>
                                <div className={`flex items-center text-xs ${card.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {card.change >= 0 ? (
                                        <ArrowUpRight className="w-3 h-3 mr-1" />
                                    ) : (
                                        <ArrowDownRight className="w-3 h-3 mr-1" />
                                    )}
                                    <span>{Math.abs(card.change)}%</span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-1">vs last period</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sales Overview</h2>
                        <Bar data={data.salesData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Revenue Trend</h2>
                        <Line data={data.revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </motion.div> */}
                </div>
            </>
        ),
        products: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
            >
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Top Products</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Sales</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Revenue</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Growth</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {data.topProducts.map((product) => (
                                <motion.tr
                                    key={product.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{product.sales}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${product.revenue}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.growth > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {product.growth > 0 ? '+' : ''}{product.growth}%
                                        </span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        ),
        customers: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                >
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Customer Segments</h2>
                    <Doughnut data={data.customerSegments} options={{ responsive: true, maintainAspectRatio: false }} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                >
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">New vs Returning Customers</h2>
                    <Doughnut data={data.newVsReturning} options={{ responsive: true, maintainAspectRatio: false }} />
                </motion.div>
            </div>
        ),
        reports: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Reports</h2>
                {/* <ul>
                    {data.reports.map((report, index) => (
                        <li key={index} className="mb-2">
                            <a href={report.link} className="text-blue-600 hover:underline">{report.title}</a>
                        </li>
                    ))}
                </ul> */}
            </div>
        ),
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <div className="relative">
                    <select
                        value={selectedTimeRange}
                        onChange={(e) => setSelectedTimeRange(e.target.value)}
                        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md p-2"
                    >
                        {timeRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex mb-4">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                    Overview
                </button>
                <button
                    onClick={() => setActiveTab('products')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                    Products
                </button>
                <button
                    onClick={() => setActiveTab('customers')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'customers' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                    Customers
                </button>
                <button
                    onClick={() => setActiveTab('reports')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'reports' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                    Reports
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'overview' && <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{tabContent.overview}</motion.div>}
                {activeTab === 'products' && <motion.div key="products" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{tabContent.products}</motion.div>}
                {activeTab === 'customers' && <motion.div key="customers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{tabContent.customers}</motion.div>}
                {activeTab === 'reports' && <motion.div key="reports" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{tabContent.reports}</motion.div>}
            </AnimatePresence>
        </div>
    );
}
