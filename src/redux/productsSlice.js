import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    stock:20
}

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            console.log(data);
            return {data};
        } catch (e) {
            console.log(e);
        }
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        getStock : (state, action) =>{
            return state.stock
        }
    },
    extraReducers: {
        [getAllProducts.fulfilled]: (state, action) => {
            return action.payload.data;
        }
    }

})



export const { getStock } = productsSlice.actions;
export default productsSlice.reducer;