import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import LANGUAGES from '../../constants/Translations';

export interface HeaderState {
    selectedLanguage: LANGUAGES;
    loggedIn: boolean;
}

const initialState: HeaderState = {
    selectedLanguage: LANGUAGES.EN,
    loggedIn: false
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,

    reducers: {
        changeLanguage: (state, action: PayloadAction<LANGUAGES>) => {
            state.selectedLanguage = action.payload;
        },

        changeLogInState: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
        }
    },
});

export const { changeLanguage, changeLogInState } = headerSlice.actions;

export const setLanguage = (state: RootState) => state.header.selectedLanguage;
export const setLogInState = (state: RootState) => state.header.loggedIn;

export default headerSlice.reducer;
