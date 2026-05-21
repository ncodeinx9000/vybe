import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
  name: "story",
  initialState: {
    storyData: null,
    storyList: null,
    currentUserStory: null,
  },
  reducers: {
    setStoryData: (state, action) => {
      state.storyData = action.payload;
    },
    setStoryList: (state, action) => {
      state.storyList = action.payload;
    },
    setCurrentUserStroy: (state, action) => {
      state.currentUserStory = action.payload;
    },
  },
});

export const { setStoryData, setStoryList, setCurrentUserStroy } =
  storySlice.actions;
export default storySlice.reducer;
