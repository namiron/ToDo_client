import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILoginTypes, IUserType } from '../../types/IUserProps';
import { AppDispatch } from '../../store';
import { isUserAuth } from '../../reducers/userSlice';



const baseUrl = import.meta.env.VITE_BASE_URL;

export const useLogin = createAsyncThunk<IUserType, ILoginTypes, { dispatch: AppDispatch, rejectWithValue: string }>(
    'user/useLogin',
    async ({ email, password }, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, {
                email, password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data: IUserType = await response.data
            dispatch(isUserAuth(data))
            return data
        } catch (error) {
            return rejectWithValue('error login')
        }
    }
)