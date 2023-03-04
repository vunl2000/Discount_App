import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        isLogin: false
    },
    reducers: {
        SetLoginStatus: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        }
    }
});

const { actions, reducer } = LoginSlice;

export const { SetLoginStatus } = actions;

export default reducer;