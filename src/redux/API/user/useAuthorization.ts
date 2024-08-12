import { createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../../store';
import { isUserAuth } from '../../reducers/userSlice';
import { IUserType } from '../../types/IUserProps';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useAuthorization = createAsyncThunk<IUserType, void, { dispatch: AppDispatch, rejectWithValue: string }>(
    'user/useAuthorization',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/auth/authorization`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })

            const data: IUserType = await response.data
            dispatch(isUserAuth(data))
            return data
        } catch (error) {
            return rejectWithValue('authorization error')
        }
    }
)