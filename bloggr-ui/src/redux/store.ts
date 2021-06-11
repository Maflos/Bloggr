import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import headerReducer from './reducers/headerSlice';
import usersReducer from './reducers/usersSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        users: usersReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
