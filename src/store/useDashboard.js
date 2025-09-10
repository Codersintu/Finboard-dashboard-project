import create from "zustand";

export const useDashboardStore = create((set, get) => ({
  widgets: [],
  addWidget: (w) => set((s) => ({ widgets: [...s.widgets, w] })),
  updateWidget: (id, patch) => set(s => ({ widgets: s.widgets.map(w=>w.id===id?{...w,...patch}:w) })),
  removeWidget: (id) => set(s => ({ widgets: s.widgets.filter(w=>w.id!==id) })),
  setWidgets: (widgets) => set({ widgets })
}));
