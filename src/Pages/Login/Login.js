import React from 'react';
import { useEffect } from 'react';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gLoading, gError, gUser] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, loading, error, user] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);

    let signError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading />
    }

    if (error || gError) {
        signError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        await navigate('/appointment');
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Six or more characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password.message}</span>}
                            </label>
                        </div>
                        {
                            signError
                        }
                        <input className="btn w-full max-w-xs" type="submit" value="Login" />
                    </form>
                    <p>New to Doctors Portal? <Link to="/signup">Create new account</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;