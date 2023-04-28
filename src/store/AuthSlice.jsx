import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isloggedIn:false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state,actions)=>{
        state.isloggedIn=true
        console.log(actions.payload);
        localStorage.setItem('token',`${actions.payload}`)
    },
    logout:(state)=>{
        state.isloggedIn=false
        localStorage.removeItem('token')
    },
  }
});

export const authActions= authSlice.actions

export default authSlice.reducer