import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    successLike(state: any, action: any) {
      state.data = action.payload;
    },
  },
});

export const { successLike } = LikeSlice.actions;
export default LikeSlice.reducer;
