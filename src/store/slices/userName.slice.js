import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'Pokemon',
    initialState: '',
    reducers: {
        setUserNameGlobal: (state, action) =>  action.payload
    }
})

export const {setUserNameGlobal} = userNameSlice.actions
export default userNameSlice.reducer