import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'Filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    serchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
export default filtersSlice;
