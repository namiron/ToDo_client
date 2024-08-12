import React from 'react'
import { useForm } from 'react-hook-form'
import { ILoginTypes } from './types/IAuthTypes'
import { ERRORS_EMAIL, LOGIN, PASSWORD } from '../common/constant'
import formStyles from './styles/formStyles.module.scss'
import { NavLink, Navigate } from 'react-router-dom'
import { ROUTES } from '../routes/Routes'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useLogin } from '../../redux/API/user/useLogin'





const Login: React.FC = () => {

    //-----------------------
    const isAuth = useAppSelector((state) => state.user.isAuth)

    const { register, formState: {
        errors, isValid
    }, handleSubmit, reset } = useForm<ILoginTypes>({ mode: 'onBlur' })

    const dispatch = useAppDispatch()

    const handlerAuthUser = (data: ILoginTypes) => {
        dispatch(useLogin({
            email: data.email,
            password: data.password
        }))
        reset()
    }


    //-----------------------

    return (
        <div className={formStyles.login}>
            {!isAuth ?
                <div className={formStyles.holder}>
                    <div className={formStyles.heading}>
                        <h1 className={formStyles.title}>{LOGIN}</h1>
                    </div>
                    <form onSubmit={handleSubmit(handlerAuthUser)}>
                        <div className={formStyles.emailBlock}>
                            <input type="text" {...register('email', { required: true })
                            } className={formStyles.emailInput} placeholder='email' />
                            <div className={formStyles.errorEmail}>{errors?.email && <span>{ERRORS_EMAIL}</span>}</div>
                        </div>
                        <div className={formStyles.passwordBlock}>
                            <input type="text" {...register('password', { required: true })
                            } className={formStyles.passwordInput} placeholder='password' />
                            <div className={formStyles.errorPassword}>{errors?.email && <span>{PASSWORD}</span>}</div>
                        </div>
                        <button disabled={!isValid} >{LOGIN}</button>
                    </form>
                    <div className="registration">You don't have account <NavLink to={ROUTES.registration}>registration</NavLink> </div>

                </div>
                :
                <Navigate to={ROUTES.home} />
            }

        </div>
    )
}

export default Login