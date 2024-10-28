

import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from './Redux/slice/appSlice';
import Loader from './components/Loader/Loader';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home/Home'));
const JobDashboard = lazy(() => import('./pages/JobDashboard'));
const PostJob = lazy(() => import('./components/PostJob/PostJob'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const JobSearch = lazy(() => import('./pages/Dashboard/JobSearch'));
const SavedJobs = lazy(() => import('./pages/Dashboard/SavedJobs'));
const Applications = lazy(() => import('./pages/Dashboard/Applications'));
const Profile = lazy(() => import('./pages/Dashboard/Profile'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    // Simulating initial app loading
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  // Function to render routes with the specified layout
  const renderRoutes = (layout, routes) => (
    <Route path={layout.path} element={layout.component}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  );

  // Define the routes for the authentication layout
  const authRoutes = [
    { path: '/login', element: isAuthenticated ? <Navigate to="/" /> : <Login /> },
    { path: '/signup', element: isAuthenticated ? <Navigate to="/" /> : <Signup /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
  ];

  // Define the routes for the main layout
  const mainRoutes = [
    { path: '/', element: <Home /> },
  ];
  // Define the routes for the admin layout
  const adminRoutes = [
    { path: '/admin', element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" /> },
    { path: '/post-job', element: isAuthenticated ? <PostJob /> : <Navigate to="/login" /> },
    { path: '/profile', element: isAuthenticated ? <Profile /> : <Navigate to="/login" /> },
    { path: '/dashboard', element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" /> },
    { path: '/JobDashboard', element: isAuthenticated ? <JobDashboard /> : <Navigate to="/login" /> },
    { path: '/job-search', element: isAuthenticated ? <JobSearch /> : <Navigate to="/login" /> },
    { path: '/saved-jobs', element: isAuthenticated ? <SavedJobs /> : <Navigate to="/login" /> },
    { path: '/applications', element: isAuthenticated ? <Applications /> : <Navigate to="/login" /> },
  ];
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Render Main Layout with defined main routes */}
          {renderRoutes(
            { path: '', component: <MainLayout /> },
            mainRoutes
          )}
          {/* Render Auth Layout with defined auth routes */}
          {renderRoutes(
            { path: '', component: <AuthLayout /> },
            authRoutes
          )}

          {/* Render Admin Layout with defined admin routes */}
          {renderRoutes(
            { path: '', component: <AdminLayout /> },
            adminRoutes
          )}
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      {/* Toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        toastClassName={() =>
          `relative flex p-4 mb-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white`
        }
        bodyClassName={() => 'flex items-center'}
        className="mt-12"
      />
    </Router>
  );
}