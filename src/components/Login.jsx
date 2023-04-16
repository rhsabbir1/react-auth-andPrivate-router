import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import { Result } from 'postcss';

const Login = () => {
    const {singIn} = useContext(AuthContex)

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email , password)
        .then(result =>{
            const logged = result.user;
            console.log(logged)
        })
        .catch(error =>{
            console.log(error)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center my-4">
                    <h1 className="text-5xl font-bold">Please Login !!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <Link to='/register'>Register Now !!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

