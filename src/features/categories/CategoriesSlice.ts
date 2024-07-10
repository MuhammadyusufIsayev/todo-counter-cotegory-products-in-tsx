import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CategoriesState {
  categories: string[];
  loading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  return (await response.json()) as string[];
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default categoriesSlice.reducer;
