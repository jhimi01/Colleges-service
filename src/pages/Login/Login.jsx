
import loginsvg from '../../../public/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useState } from 'react';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { loginWithEmail, logingoogle } = useContext(AuthContext)
    const [error, setError] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        loginWithEmail(data?.email, data?.password)
        .then(result => {
            const userlogin = result.user;
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Successfully logged in',
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from, { replace: true });
            setError('')
        }).catch(err => {
            setError(err.message)
        })
    };

    const handleGoogle =()=>{
        logingoogle()
        .then(result => {
            const userlogin = result?.user;
            setError('')
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Successfully logged in',
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from, { replace: true });
        }).catch(err => {
            setError(err.message)
        })
    }

    return (
       
        <div className="hero min-h-screen bg-base-200">
         <Helmet>
            <title>Login | College</title>
        </Helmet>
        <div className="hero-content flex-col md:flex-row-reverse">
           <img className='w-full' src={loginsvg} alt="" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           
           <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
           <h1 className='text-4xl font-semibold'>Please Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                {errors.password && <span className='text-red-500'>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn bg-[#407bff] text-white hover:bg-[#618dec]">Login</button>
              {error && <span className="text-red-500 text-xs">{error}</span>}
              </div>
              <Link to='/signup'><p className='text-[#407bff] text-sm underline'>Are you new here? signup</p></Link>
            </form>
          
            <div className='divider'>or</div>
          <button className='btn rounded-none' onClick={handleGoogle}>Signin with Google <FcGoogle className='text-2xl'/></button>
          </div>
        </div>
      </div>
    );
};

export default Login;