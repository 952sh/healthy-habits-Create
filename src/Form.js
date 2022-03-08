import React, { useState } from 'react';
import './Form.css';
import Signup from './Signup';
import UserRegistered from './UserRegistered';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='header'>
        <h1>Healthy Habits Tracker</h1>
      </div>
      <img className='form-img' src='img/food.jpg' alt='Food' />
      <div className='form-container'>
        {!isSubmitted ? (
          <Signup submitForm={submitForm} />
        ) : (
          <UserRegistered />
        )}
      </div>
    </>
  );
};

export default Form;
