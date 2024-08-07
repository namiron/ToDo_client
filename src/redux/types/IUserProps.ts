export interface IUserType {
    token: string,
    user: {
        id?: string,
        name: string,
        surname: string,
        email: string,
        avatar: string,
        item?: any,
    }
}

export interface ICallbackGoogleType {
    token: string,
    user: {
        name: string,
        avatar: string,
        email: string
    }
}
export interface IRegistrationTypes {
    email: string,
    password: string | number,
    name: string,
    surname: string
}
export interface ILoginTypes {
    email: string,
    password: string | number,
}


export interface IInitialState {
    isAuth: boolean,
    currentUser: IUserType | {}
}
