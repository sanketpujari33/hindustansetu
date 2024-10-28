import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"
import { useEffect, useState } from 'react';
import { LoaderSecond } from '../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadComplete = () => setLoading(false);
        const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

        return () => clearTimeout(timer); // Cleanup
    }, []);
    return (
        <>
            <div className="flex h-screen">

                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
                        {loading ? (
                            <LoaderSecond />
                        ) : (
                            <Outlet />
                        )}
                    </main >
                </div>
            </div >
        </>
    );
};

export default AdminLayout;
