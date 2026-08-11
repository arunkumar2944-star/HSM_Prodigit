import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [
    {
      id: 1,
      name: "Grand Palace",
      location: "Chennai",
      rating: 4.8,
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Royal Residency",
      location: "Coimbatore",
      rating: 4.5,
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      id: 3,
      name: "Ocean View",
      location: "Goa",
      rating: 4.9,
      price: 5200,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },
  ],
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotels(state, action) {
      state.hotels = action.payload;
    },
  },
});

export const { setHotels } = hotelSlice.actions;

export default hotelSlice.reducer;