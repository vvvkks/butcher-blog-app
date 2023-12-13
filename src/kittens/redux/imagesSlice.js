import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getKittyPhoto } from '../api/KittensApi';

export const fetchImages = createAsyncThunk('images/fetchImages', async (page) => {
    const data = await getKittyPhoto(page);
    return data.map((catImage) => ({
        id: parseInt(catImage.id),
        url: catImage.url,
        name: catImage.name,
        origin: catImage.origin,
    }));
});

const initialState = {
    images: [],
    likedImages: [],
    showLikedOnly: false,
    loading: false,
};

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addToLiked: (state, action) => {
            if (!state.likedImages.includes(action.payload)) {
                state.likedImages = [...state.likedImages, action.payload];
            }
        },
        removeFromLiked: (state, action) => {
            state.likedImages = state.likedImages.filter((img) => img !== action.payload);
        },
        setFilterMode: (state, action) => {
            state.showLikedOnly = action.payload;
        },
        removeFromImagesAndLiked: (state, action) => {
            state.likedImages = state.likedImages.filter((img) => img !== action.payload);
            state.images = state.images.filter((img) => img.url !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.loading = false;
                state.images = action.payload;
            });
    },
});

export const { addToLiked, removeFromLiked, setFilterMode, removeFromImagesAndLiked } = imagesSlice.actions;

export const selectImagesState = (state) => state.images;

export default imagesSlice.reducer;