import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './slice/jobSlice'; // Make sure this path is correct
import themeReducer from './slice/themeSlice'; // Ensure this points to the correct theme slice file
import authReducer from './slice/authSlice'; // Ensure this path is correct
import appReducer from './slice/appSlice'; // Ensure this path is correct
import languageReducer from './slice/languageSlice';
import dashboardReducer from './slice/dashboardSlice'
// Create a Redux store containing our reducers.
export const store = configureStore({
    reducer: {
        job: jobReducer,
        theme: themeReducer,
        auth: authReducer,
        app: appReducer,
        language: languageReducer,
        dashboard: dashboardReducer,
    },
});

// Define RootState and AppDispatch for usage in your components (if using TypeScript)
export const RootState = () => store.getState();
export const AppDispatch = () => store.dispatch();
