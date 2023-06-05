import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

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
    language: "tr",
  },
};

export const fetchSettings = createAsyncThunk("fetchSettings", async (key) => {
  await AsyncStorage.getItem(key)
    .then((data) => data)
    .then((value) => {
      return JSON.parse(value);
    });
});

export const changeLanguage = (languageId) => (dispatch) => {
  /*
    Change Language
  */
  return i18n.changeLanguage(languageId).then(async () => {
    await AsyncStorage.setItem("language", languageId);
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
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
    languageChanged: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      state.settings = action.payload;
    });
  },
});

export const selectCurrentLanguageId = ({ i18n: _i18n }) => _i18n.language;

export const selectLanguages = ({ i18n: _i18n }) => _i18n.languages;

export const selectCurrentLanguageDirection = createSelector(
  [selectCurrentLanguageId],
  (id) => {
    return i18n.dir(id);
  }
);

export const selectCurrentLanguage = createSelector(
  [selectCurrentLanguageId, selectLanguages],
  (id, languages) => {
    return languages.find((lng) => lng.id === id);
  }
);

export default settings.reducer;

export const { setSettings, languageChanged } = settings.actions;
