import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// User interface
const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

// Async thunk for login
export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (email === 'test@example.com' && password === 'password') {
            return { user: { id: '1', email, name: 'Test User' }, token: 'fake-jwt-token' };
        }
        throw new Error('Invalid credentials');
    }
);

// Async thunk for signup
export const signup = createAsyncThunk(
    'auth/signup',
    async ({ email, password, name }) => {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { user: { id: Date.now().toString(), email, name }, token: 'fake-jwt-token' };
    }
);

// Async thunk for password reset
export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (email) => {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { message: 'Password reset link sent to your email' };
    }
);

// Create auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Login failed';
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Signup failed';
            })
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Password reset failed';
            });
    },
});

// Exporting actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
