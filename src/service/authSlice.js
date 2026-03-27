import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../Axios/Apicollaction";
const initialState = {
    loggedinUser: null,
    isLoggedIn: false,
    isLoading: false,

}
const loginUserAsync = createAsyncThunk("handleLogin",
    async(payload)=>{
        try {
            const res = await loginApi(payload)
            return res;
        } catch (error) {
            
        }
    }
)
const authSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        handleLogin: (state, action) => {
            console.log(state);
            console.log(action);
            state.isLoading = action.payload.loginStatus
            state.loggedinUser = action.payload.userDetails
        }
    },
    extraReducers:(builder)=>{
    builder.addCase(loginUserAsync.panding,(state)=>{
        state.isLoading = true;

    })
    .addCase(loginUserAsync.fulfilled, (state,action)=>{
        state.isLoggedIn = action.payload.loginStatus
        state.loggedinUser = action.payload.userDetails
        state.isLoggedIn =false;

    })
    addCase(loginUserAsync.rejected, (state)=>{
        state.isLoading = false;
    })
    }

})
export const { handleLogin } = authSlice.actions;
export default authSlice.reducer