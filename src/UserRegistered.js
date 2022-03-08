import React from 'react';
import './Form.css';

const UserRegistered = () => {
  return (
    <div>
      {/* Replace link with router link to Ashley's Profile Page here!!!! */}
      <form action='Profile Page Link'>
        <h2 className='form-success'>Thank you for registering your account. Let's start Tracking!</h2>
          <button className='form-track-btn' type='submit'>
            Begin Tracking!
          </button>
      </form>
    </div>
  );
};

export default UserRegistered;
