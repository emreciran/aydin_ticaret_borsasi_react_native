import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: {
    pamuk: false,
    ceksiz_kuru_uzum: false,
    tescil_bulten: false,
    aylik_finans_emtia: false,
    duyuru: false,
    haber: false,
    etkinlik_takvimi: false,
    dergi: false,
  },
};

// export const fetchSettings = createAsyncThunk("fetchSettings", async (key) => {
//   await AsyncStorage.getItem(key)
//     .then((data) => data)
//     .then((value) => {
//       return JSON.parse(value);
//     });
// });

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      if (action.payload) {
        state.settings = action.payload;
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchSettings.fulfilled, (state, action) => {
  //     state.settings = action.payload;
  //   });
  // },
});

export default settings.reducer;

export const { setSettings } = settings.actions;
