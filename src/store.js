// store.js
import { atom, selectorFamily } from "recoil";
import axios from "axios";

export const widgetAPI = atom({
  key: "API", // default storage of last tested URL
  default: "",
});

export const widgetName = atom({
  key: "Name", // default storage of last tested URL
  default: "",
});
export const widgetsecond = atom({
  key: "intersecond", // default storage of last tested URL
  default: "",
});


export const widgetData = selectorFamily({
  key: "APISelector",
  get: ({ url,enabled }) => async () => {
    if (!url || !enabled) return null;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return res.text("request failed")
    }
  },
});

