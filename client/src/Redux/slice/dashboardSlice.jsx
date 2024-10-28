import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch dashboard data
export const fetchDashboardData = createAsyncThunk(
    'dashboard/fetchData',
    async (timeRange) => {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            statCards: [
                { title: 'Revenue', value: '$54,239', change: 12.5, icon: 'dollar-sign' },
                { title: 'New Customers', value: '3,124', change: -2.3, icon: 'users' },
                { title: 'Orders', value: '8,741', change: 5.7, icon: 'shopping-cart' },
                { title: 'Conversion Rate', value: '3.5%', change: 1.2, icon: 'activity' },
                { title: 'Avg. Order Value', value: '$67.54', change: 2.8, icon: 'trending-up' },
                { title: 'Site Traffic', value: '245,678', change: 8.1, icon: 'zap' },
            ],
            salesData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [12, 19, 3, 5, 2, 3].map(() => Math.floor(Math.random() * 100)),
                        backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    },
                ],
            },
            revenueData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [65, 59, 80, 81, 56, 55].map(() => Math.floor(Math.random() * 100)),
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            },
            topProducts: [
                { id: 1, name: 'Product A', sales: 1234, revenue: 45678, growth: 15.2 },
                { id: 2, name: 'Product B', sales: 987, revenue: 34567, growth: -5.7 },
                { id: 3, name: 'Product C', sales: 765, revenue: 23456, growth: 8.9 },
                { id: 4, name: 'Product D', sales: 543, revenue: 12345, growth: 3.4 },
                { id: 5, name: 'Product E', sales: 321, revenue: 6789, growth: -2.1 },
            ],
            customerSegments: {
                labels: ['New', 'Returning', 'Inactive'],
                datasets: [
                    {
                        data: [30, 50, 20],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            },
            customerAcquisition: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'New Customers',
                        data: [65, 59, 80, 81, 56, 55],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            },
        };
    }
);

// Initial state for the dashboard
const initialState = {
    data: null,
    loading: false,
    error: null,
};

// Create slice
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

// Export the reducer
export default dashboardSlice.reducer;
