import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { signUp } from '../api/api';
import useAsyncFn from '../hooks/useAsyncFn';
import useForm from '../hooks/useForm';
import Button from './Button';
import CardForm from './CardForm';
import ErrorText from './ErrorText';
import Input from './Input';
import Title from './Title';

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '', confirmPassword: '' },
    onSubmit: async () => {
      return await callback();
    },
    validate: ({ email, password, confirmPassword }: SignUpValues) => {
      const newErrors: SignUpValues = {
        email: '',
        password: '',
        confirmPassword: '',
      };
      if (!email.includes('@') || !email.includes('.')) {
        newErrors.email = '이메일을 올바르게 입력해주세요';
      }

      if (!email) {
        newErrors.email = '이메일을 입력해주세요';
      }
      if (password.length < 8) {
        newErrors.password = '패스워드는 최소 8자 이상이어야 합니다.';
      }

      if (!password) {
        newErrors.password = '비밀번호를 입력해주세요';
      }
      if (!confirmPassword) {
        newErrors.confirmPassword = '비밀번호를 입력해주세요';
      }
      if (confirmPassword && confirmPassword !== password) {
        newErrors.confirmPassword = '비밀번호를 동일하게 입력해주세요';
      }

      return newErrors;
    },
  });

  const [asyncState, callback]: any = useAsyncFn(async () => {
    await signUp(values);
  }, []);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
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
      <Input
        type="text"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
        style={{ marginTop: 8 }}
      />
      {errors?.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        Create Account
      </Button>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button disabled={isLoading} style={{ marginTop: 16 }}>
          Login
        </Button>
      </Link>
    </CardForm>
  );
};

export default SignUpForm;
