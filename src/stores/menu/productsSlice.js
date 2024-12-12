import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    error: null,
    status: 'idle',
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "fulfilled"
             state.products = [...action.payload.data ]
          //  state.products = Array.isArray(action.payload.data) ? action.payload.data : [];
        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "pending"
        })
    }
})

export const { getProducts } = productsSlice.actions
export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch("http://localhost:5500/api/product-by-categories")
    const data = await response.json()
    return data;
});

export const selectAllProducts = (state) => state.products;