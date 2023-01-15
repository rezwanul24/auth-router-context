import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {

  const {signIn, googleSignin} = useContext(AuthContext);
    // console.log('signIn', signIn);
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error =>{
          console.error(error);
        })
        
    }

    const handleGoogleSignIn = ()=> {
        googleSignin()
        .then(result => {
          const user = result.user;
          // console.log(user);
        })
        .catch(error => {
          console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
      </form>
      <button className="btn btn-outline btn-success" onClick={handleGoogleSignIn} >Google SignIn</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;