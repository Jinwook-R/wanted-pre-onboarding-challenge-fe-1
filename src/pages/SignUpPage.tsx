import React from 'react';
import { signUp } from '../api/api';
import AuthHeader from '../components/AuthHeader';
import AuthTemplate from '../components/AuthTemplate';
import SignUpForm from '../components/SignUpForm';
const SignUpPage = () => {
  return (
    <>
      <AuthHeader />
      <AuthTemplate>
        <SignUpForm />
      </AuthTemplate>
    </>
  );
};

export default SignUpPage;
