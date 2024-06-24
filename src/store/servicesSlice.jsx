import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    { name: 'Lindsay Walton', price: 'Front-end Developer', files: 'lindsay.walton@example.com' },
    // Add more services if needed
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.services.push(action.payload);
    },
  },
});

export const { addService } = servicesSlice.actions;
export default servicesSlice.reducer;
