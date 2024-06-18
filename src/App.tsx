import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MeasurementPage from './pages/MeasurementPage';
import ReportPage from './pages/ReportPage';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import TasksPage from './pages/TaskPage';
import CustomNavbar from './components/NavBar';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <CustomNavbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/measurement" element={<MeasurementPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
