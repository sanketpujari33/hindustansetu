import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';

const initialState = {
    language: 'en', // default language
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            // Update i18next language whenever the state is changed
            i18next.changeLanguage(action.payload);
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
