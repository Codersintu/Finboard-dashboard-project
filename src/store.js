// store.js
import { atom, selectorFamily } from "recoil";
import axios from "axios";

export const widgetAPI = atom({
  key: "API", // default storage of last tested URL
  default: "",
});

export const widgetData = selectorFamily({
  key: "APISelector",
  get: ({ url }) => async () => {
    if (!url) return null;
    try {
      const res = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=${T6B66GTMUHA3SVBY}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
});

