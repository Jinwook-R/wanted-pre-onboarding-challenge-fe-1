import React from 'react';
import LoginForm from '../components/LoginForm';
import AuthHeader from '../components/AuthHeader';
import AuthTemplate from '../components/AuthTemplate';

const LoginPage = ({ setUserToken }: any) => {
  return (
    <>
      <AuthHeader />
      <AuthTemplate>
        <LoginForm setUserToken={setUserToken} />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
