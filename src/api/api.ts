import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Auth = {
  email: string;
  password: string;
};

const login = async ({ email, password }: Auth) => {
  return await axios
    .post('http://localhost:8080/users/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.status !== 200) {
        alert('아이디 또는 비밀번호를 확인해주세요');
        return;
      }

      return response.data;
    });
};

const signUp = async ({ email, password }: Auth) => {
  return await axios
    .post('http://localhost:8080/users/create', {
      email,
      password,
    })
    .then((response) => response.data);
};

export { signUp, login };
