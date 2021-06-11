import { RootState } from './index';
import { Ipsychologist } from './../interfaces/Ipsychologist';
import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";


  
let state:Ipsychologist[] = []

const usersSlice = createSlice({
    name:'Users',
    initialState:{users:<Ipsychologist[]>state},
    reducers:{

        //Dispatch all input psychologists
        addUsers(state,action:{payload:Ipsychologist[]}){
            state.users=action.payload
        },
        
        
    }
    
    
    
})
export const {addUsers} = usersSlice.actions
export default usersSlice.reducer
export const selectUsers = (state: RootState) => state.users;
