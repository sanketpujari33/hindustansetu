import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    jobs: [],
    filter: '',
    loading: false,
    error: null,
};

// Async thunk to fetch jobs
export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
        { id: '1', title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', status: 'open' },
        { id: '2', title: 'Product Manager', company: 'InnovateCo', location: 'New York, NY', status: 'open' },
        { id: '3', title: 'Data Analyst', company: 'DataDriven', location: 'Chicago, IL', status: 'paused' },
    ];
});

// Create the job slice
const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch jobs';
            });
    },
});

// Export actions and reducer
export const { addJob, setFilter } = jobSlice.actions;
export default jobSlice.reducer;
