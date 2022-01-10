import HomePageSlice from "./slice";

export const {
  loadingHomePage,
  successHomePage,
  errorHomePage,
  resetHomePage,
} = HomePageSlice.actions;

export default HomePageSlice.reducer;
