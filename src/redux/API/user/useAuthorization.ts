import { createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../../store';
import { isUserAuth } from '../../reducers/userSlice';
import { IUserType } from '../../types/IUserProps';

const baseUrl = import.meta.env.VITE_BASE_URL;

