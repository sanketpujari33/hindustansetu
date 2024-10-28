import { useEffect, useState } from 'react';
import { LoaderSecond } from '../components/Loader/Loader';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import MobileNav from '../components/Navbar/MobileNav';

function MainLayout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadComplete = () => setLoading(false);
        const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
                {loading ? (
                    <LoaderSecond />
                ) : (
                    <Outlet />
                )}
            </main >
            <MobileNav />
            <Footer />
        </div>
    );
}

export default MainLayout;
