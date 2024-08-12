import { createAsyncThunk, } from '@reduxjs/toolkit';

import axios from 'axios';
import { IRegistrationTypes, IUserType } from '../../types/IUserProps';
import { AppDispatch } from '../../store';
import { isUserAuth } from '../../reducers/userSlice';



const baseUrl = import.meta.env.VITE_BASE_URL;


export const useRegistration = createAsyncThunk<IUserType, IRegistrationTypes, { dispatch: AppDispatch, rejectWidthValue: string }>(
    'user/useRegistration',
    async ({ email, name, surname, password }, { dispatch, rejectWithValue, }) => {
        try {
            const response = await axios.post(`${baseUrl}/auth/registration`, {
                email, name, surname, password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.data) {
                return rejectWithValue('no data')
            }
            const data: IUserType = await response.data

            dispatch(isUserAuth(data))
            return data
        } catch (error) {
            return rejectWithValue('registration error')
        }
    }
)