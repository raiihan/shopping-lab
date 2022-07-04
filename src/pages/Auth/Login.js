import React, { useState } from 'react';
import { MdEmail, MdPassword } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useForm } from "react-hook-form";
import login from '../../assets/Login.jpg'
import Social from './Social';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [display, setDisplay] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    if (user) console.log(user.user);
    return (
        <div className='flex h-screen'>
            <div className='hidden sm:block w-3/6'>
                <img src={login} alt="login" className='w-full h-screen' />
            </div>
            <div className='w-full sm:w-3/6 flex items-center justify-center'>
                <div className='w-full sm:w-[368px]'>
                    <h1 className='text-3xl ml-32'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Email</span>
                            </label>
                            <label class="input-group">
                                <span><MdEmail /></span>
                                <input type="text"
                                    {...register("email", {
                                        required: 'Email Address is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Please Provide a valid email'
                                        }
                                    })}
                                    placeholder="info@site.com" class="input input-bordered  w-full max-w-xs" />
                            </label>
                        </div>
                        <p className='text-red-500 font-semibold'>{errors.email?.message}</p>
                        <div class="form-control ">
                            <label class="label">
                                <span class="label-text"> Password</span>
                            </label>
                            <label class="input-group relative">
                                <span><MdPassword /></span>
                                <div onClick={() => setDisplay(!display)} className='absolute top-3 left-80'>
                                    {display ? <AiFillEyeInvisible size={32} /> : <AiFillEye size={32} />}
                                </div>
                                <input type={display ? "text" : "password"}
                                    {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Minimum length 6 characters' } })}
                                    placeholder="password" class="input input-bordered  w-full max-w-xs " />
                            </label>
                            <p className='text-red-500 font-semibold'>{errors.password?.message}</p>
                            <div className="label">
                                <span className="label-tex-alt"></span>
                                <span
                                    // onClick={resetPassword}
                                    className="label-tex-alt  link link-hover hover:text-blue-400 mr-3 text-sm">Forgot Password</span>
                            </div>
                        </div>
                        {error && <p className='text-red-500'>{error?.message}</p>}
                        <div className="form-control">
                            <button class="mt-6 btn btn-primary ">Login</button>
                        </div>
                    </form>
                    <div class="divider">OR</div>
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Login;