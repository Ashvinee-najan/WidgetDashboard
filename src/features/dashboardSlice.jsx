import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Widget 1', text: 'Random text for Widget 1' },
        { id: 2, name: 'Widget 2', text: 'Random text for Widget 2' }
      ]
    },
    {
      id: 2,
      name: 'Security Overview',
      widgets: [
        { id: 3, name: 'Widget 3', text: 'Random text for Widget 3' }
      ]
    }
  ],
  availableWidgets: [
    { id: 4, name: 'Available Widget 1', text: 'Random text for Available Widget 1' },
    { id: 5, name: 'Available Widget 2', text: 'Random text for Available Widget 2' }
  ]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, name, text } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push({ id: Date.now(), name, text });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
