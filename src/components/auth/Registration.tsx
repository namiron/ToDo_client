import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import formStyles from './styles/formStyles.module.scss'
import { FaRegEye } from "react-icons/fa6"; // open
import { FaRegEyeSlash } from "react-icons/fa6"; // close
import { IRegistrationTypes } from './types/IAuthTypes';
import { ERRORS_EMAIL, ERRORS_NAME, ERRORS_SURNAME, REGISTRATION } from '../common/constant';
import { NavLink, Navigate } from 'react-router-dom'
import { ROUTES } from '../routes/Routes';
import { useGoogleAuth } from '../../redux/API/user/useGoogle';
import { useRegistration } from '../../redux/API/user/userRegistration';




const Registration: React.FC = () => {

    //---------------------------------------
    const isAuth = useAppSelector((state) => state.user.isAuth)


    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<IRegistrationTypes>({ mode: 'onBlur' })

    const handlerTypeChange = () => setType(type === 'password' ? 'text' : 'password')

    const [type, setType] = React.useState<string>('password')

    const dispatch = useAppDispatch()

    const handlerCreateUser = (data: IRegistrationTypes) => {
        dispatch(useRegistration({
            name: data.name,
            email: data.email,
            surname: data.surname,
            password: data.password,

        }))
        reset()
    }
    //---------------------------------------


    return (
        <div className={formStyles.registration}>
            {!isAuth ?
                <div className={formStyles.holder}>
                    <div className={formStyles.heading}>
                        <h1 className={formStyles.title}>{REGISTRATION}</h1>
                    </div>
                    <form onSubmit={handleSubmit(handlerCreateUser)}>
                        <div className={formStyles.nameBlock}>
                            <input type="text" {...register('name', { required: true })} placeholder='name' className={formStyles.nameInput} />
                            <p className={formStyles.error}>{errors['name'] && <span className={formStyles.errorText}>{ERRORS_NAME}</span>}</p>
                        </div>
                        <div className={formStyles.surnameBlock}>
                            <input type="text" {...register('surname', { required: true },
                            )} placeholder='surname' className={formStyles.surnameInput} />
                            <p className={formStyles.error}>{errors['surname'] && <span className={formStyles.errorText}>{ERRORS_SURNAME}</span>}</p>
                        </div>
                        <div className={formStyles.emailBlock}>
                            <input type="email" {...register('email', { required: true },
                            )} placeholder='email' className={formStyles.emailInput} />
                            <p className={formStyles.error}>{errors['email'] && <span className={formStyles.errorText}>{ERRORS_EMAIL}</span>}</p>
                        </div>
                        <div className={formStyles.passwordBlock}>
                            <input type={type} {...register('password', {
                                required: true,
                                minLength: {
                                    value: 3,
                                    message: 'minimum 3 symbol'
                                }
                            },
                            )} placeholder='password' className={formStyles.passwordInput} />
                            <div className={formStyles.visibleBlock} onClick={handlerTypeChange} >
                                <p className={formStyles.error}>{errors?.password?.message ? (
                                    <span className={formStyles.errorText}>{errors.password.message}</span>
                                ) : (
                                    <span className={formStyles.errorText}></span>
                                )} </p>

                                {type === 'password' ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <button disabled={!isValid} >{REGISTRATION}</button>
                        <div className="registration">Already have account <NavLink to={ROUTES.login}>login</NavLink> </div>
                    </form>
                    <button className="googleLogin" onClick={useGoogleAuth}> registration to google way</button>
                </div>
                :
                <Navigate to={ROUTES.home} />
            }
        </div>
    )
}

export default Registration
