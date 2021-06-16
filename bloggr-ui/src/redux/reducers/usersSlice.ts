import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import User from '../../models/User';
import UserMockService from '../../mocks/UserMockService';

export interface UsersState {
    loggedUser: User | null;
    loggedIn: boolean;
}

const initialState: UsersState = {
    loggedUser: null,
    loggedIn: false
};

export const getLoggedUserAsync = createAsyncThunk(
    'users/getLoggedUser',
    async () => {
        const response = await UserMockService.getLoggedUser();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        changeLogInState: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getLoggedUserAsync.pending, (state) => {
                console.log('loading');
            })
            .addCase(getLoggedUserAsync.fulfilled, (state, action) => {
                console.log('idle');
                state.loggedUser = action.payload;
            });
    },
});

export const { changeLogInState } = usersSlice.actions;

export const setLogInState = (state: RootState) => state.users.loggedIn;
export const getLoggedUser = (state: RootState) => state.users.loggedUser;

export default usersSlice.reducer;
