import { configureStore, } from '@reduxjs/toolkit'
import todoSlice from './reducers/todoSlice';
import userSlice from './reducers/userSlice';


const store = configureStore(
    {
        reducer: {
            todo: todoSlice,
            user: userSlice,
        }
    }
)
export default store;

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;