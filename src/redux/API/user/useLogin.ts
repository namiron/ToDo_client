import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILoginTypes, IUserType } from '../../types/IUserProps';
import { AppDispatch } from '../../store';
import { isUserAuth } from '../../reducers/userSlice';



const baseUrl = import.meta.env.VITE_BASE_URL;

