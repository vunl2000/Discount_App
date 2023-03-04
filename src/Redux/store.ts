import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LoginReducer from './Slices/LoginSlice'
export const store = configureStore({
    reducer: {
        login: LoginReducer,
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
