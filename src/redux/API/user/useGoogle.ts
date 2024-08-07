import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserType } from "../../types/IUserProps";
import { AppDispatch } from "../../store";
import axios from "axios";
import { isUserAuth } from "../../reducers/userSlice";


export const baseUrl = import.meta.env.VITE_BASE_URL;

export const useGoogleAuth = () => {
    window.open(`${baseUrl}/auth/google`, '__self')
}




export const getGoogleUser = createAsyncThunk<IUserType, void, { dispatch: AppDispatch, rejectWithValue: string }>(
    'user/getGoogleUser',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/auth/login/success`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response.status === 200) {
                const data: IUserType = response.data;

                dispatch(isUserAuth(data));
                return data;
            } else {
                throw new Error('Authorization has been failed!');
            }
        } catch (error) {
            return rejectWithValue("login google error");
        }
    }
);
