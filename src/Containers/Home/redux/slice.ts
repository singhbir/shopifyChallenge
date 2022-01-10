import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  data: {},
};

const loadingHomePage = (state: any, action: any) => {
  state.loading = true;
};

const successHomePage = (state: any, action: any) => {
  state.loading = false;
  state.error = "";
  state.data = action.payload;
};

const errorHomePage = (state: any, action: any) => {
  state.loading = false;
  state.error = action.payload;
};

const resetHomePage = (state: any) => {
  state.loading = false;
  state.error = "";
  state.data = {};
};

const HomePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    loadingHomePage,
    successHomePage,
    errorHomePage,
    resetHomePage,
  },
});

export default HomePageSlice;
