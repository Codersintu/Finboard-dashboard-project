// store.js
import { atom, selectorFamily } from "recoil";
import axios from "axios";

export const widgetUrl = atom({
  key: "url", 
  default: "",
});
export const widgetAPI=atom({
  key:"api",
  default:","
})
export const widgettested = atom({
  key: "tested",
  default: false,
});

export const widgetName = atom({
  key: "Name",
  default: "",
});
export const widgetsecond = atom({
  key: "intersecond",
  default: "",
});



// export const widgetData = selectorFamily({
//   key: "APISelector",
//   get: ({ url,enabled }) => async ({get}) => {
//     try {
//           if (!url || !enabled) return null;
//       const res = await axios.get(url);
//       return res.data;
//     } catch (err) {
//       throw new Error("Request failed");
//     }
//   },
// });

