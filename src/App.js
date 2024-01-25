import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import TestLoadapi from './resoureces/components/test/TestLoadapi';
import Login from './resoureces/components/users/Login';
import InforPage from './resoureces/components/Infor';


function App() {

  //đọc thông tin user từ localStorage
  const getUserFromLocalStorage = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null
  }

  //Lưu thông tin user vào localStorage
  const saveUserToLocalStorage = (userInfo) => {
    if (!userInfo) {
      localStorage.removeItem('user');
      setUser(null);
      return
    }
    localStorage.setItem('user', JSON.stringify(userInfo));
    setUser(userInfo);
  }
  const [user, setUser] = useState(getUserFromLocalStorage);
  const ProtectedRoute = () => {
    if (user) {
      return <Outlet />
    }
    return <Navigate to="/login" />
  }
  const PublicRoute = () => {
    if (user) {
      return <Navigate to="/" />
    }
    return <Outlet />
  }
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            {/* màn hình đăng nhập, quên mật khẩu... ở đây */}
            <Route path="/login" element={<Login saveUser={saveUserToLocalStorage} />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            {/* sau khi đăng nhập thành công thì chuyển qua đây */}
            <Route path="/" element={<TestLoadapi />} />
          </Route>
          <Route path="/infor" element={<InforPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
