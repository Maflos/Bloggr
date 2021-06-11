import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import LANGUAGES from '../../constants/Translations';

export interface HeaderState {
    selectedLanguage: LANGUAGES;
}

const initialState: HeaderState = {
    selectedLanguage: LANGUAGES.EN,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,

    reducers: {
        changeLanguage: (state, action: PayloadAction<LANGUAGES>) => {
            state.selectedLanguage = action.payload;
        }
    },
});

export const { changeLanguage } = headerSlice.actions;

export const setLanguage = (state: RootState) => state.header.selectedLanguage;

export default headerSlice.reducer;
