import React from 'react';
import CardForm from './CardForm';
import Input from './Input';
import styled from '@emotion/styled';
import Button from './Button';
import useForm from '../hooks/useForm';
import ErrorText from './ErrorText';
import Title from './Title';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import useAsyncFn from '../hooks/useAsyncFn';
import useLocalStorage from '../hooks/useLocalStorage';

const LoginForm = ({ setUserToken }: any) => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      return await callback();
    },
    validate: ({ email, password }: { email: string; password: string }) => {
      const newErrors = { email: '', password: '' };
      if (!email) newErrors.email = '이메일을 입력하세요';
      if (!password) newErrors.password = '비밀번호를 입력해주세요';
      return newErrors;
    },
  });

  const [asyncState, callback]: any = useAsyncFn(async () => {
    const { message, token } = await login(values);
    if (token) {
      setUserToken(token);
      // window.location.reload();
    }
  }, [values]);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input type="text" name="email" placeholder="email" onChange={handleChange} />
      {errors?.email && <ErrorText>{errors.email}</ErrorText>}
      <Input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ marginTop: 8 }}
      />
      {errors?.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        Login
      </Button>
      <Link to="/signUp" style={{ textDecoration: 'none' }}>
        <Button disabled={isLoading} style={{ marginTop: 16 }}>
          Sign up
        </Button>
      </Link>
    </CardForm>
  );
};

export default LoginForm;
