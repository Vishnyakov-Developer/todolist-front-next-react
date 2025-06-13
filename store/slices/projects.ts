import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requestGetProjects from '@/requests/requestGetProjects';

export const fetchProjects = createAsyncThunk('projects/fetch', async () => {
  const data = await requestGetProjects();
  return data;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки';
      });
  },
});

export default projectsSlice.reducer;
