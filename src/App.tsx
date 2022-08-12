import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [userToken, setUserToken] = useLocalStorage('user_token', null);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!userToken ? <LoginPage setUserToken={setUserToken} /> : <MainPage />}
        ></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
