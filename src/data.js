export const widgets=[{
  id: "w_169420",
  type: "card",           // chart | table | card
  title: "Bitcoin",
  config: {
    apiUrl: "https://api.example/.../BTC",
    fields: ["data.currency","rates.INR"],
    refreshInterval: 30
  },
  layout: { x:0, y:0, w:4, h:2 } // for react-grid-layout
}]
