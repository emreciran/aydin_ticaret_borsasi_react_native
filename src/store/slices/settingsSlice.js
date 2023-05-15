import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setSettings } = settings.actions;
export default settings.reducer;
