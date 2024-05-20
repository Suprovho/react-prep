import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      // mutating the state here. //* redux uses immer library to mutate the state which was not done earlier we cant mutate state directly.
      state.users.push(action.payload);
    },
    // ex- original state ={items:["pizza"]}
    clearAllUsers: (state) => {

       // RTK- either Mutate the existing sate or return the new state.
        
      state.users.length = 0; //* original state = [] we not directly doing  users.length=[] because state is a local variable and will not reflect in original state so we do state.users.length=0 because state act as a this variable which point to original state.

      return {users:[]} // another way of empty.. this new obj will replace the original obj..
    },
  },
});

export const { addUser, clearAllUsers } = userSlice.actions;

export default userSlice.reducer;
