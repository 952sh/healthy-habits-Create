import React from 'react';
import validate from './validateInfo';
import UserInfo from './UserInfo';
import './Form.css';

const Signup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UserInfo(
    submitForm,
    validate
  );

  return (
    
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h2>
          Create an account and let's start tracking!
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='passwordConfirm'
            placeholder='Confirm your password'
            value={values.passwordConfirm}
            onChange={handleChange}
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          {/* Add router link to the Login page here!!! */}
          Already have an account? Login <a href='/Login'>here</a>
        </span>
      </form>
    
  );
};

export default Signup;
