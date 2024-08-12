import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState, IUserType } from '../types/IUserProps'



const initialState: IInitialState = {
    isAuth: false,
    currentUser: {},
    isError: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        isUserAuth(state, { payload }: PayloadAction<IUserType>) {
            if (payload) {
                state.isAuth = true
                state.currentUser = payload.user
                localStorage.setItem('token', payload.token)
            }
        },
        exitUser(state) {
            state.currentUser = {}
            state.isAuth = false
            localStorage.removeItem('token')
        }
    },
    extraReducers(builder) {
        builder

    }
})

export const { exitUser, isUserAuth } = userSlice.actions

export default userSlice.reducer
