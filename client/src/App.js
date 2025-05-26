import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import PrivateRoute from './components/protected/PrivateRoute';
import RoleBasedRoute from './components/protected/RoleBasedRoute';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import ReportsAnalytics from './pages/admin/ReportsAnalytics';
import SystemLogs from './pages/admin/SystemLogs';

// Police Pages
import PoliceDashboard from './pages/police/PoliceDashboard';
import CriminalSearch from './pages/police/CriminalSearch';
import FIRManagement from './pages/police/FIRManagement';
import LiveStats from './pages/police/LiveStats';

// Public Pages
import Home from './pages/public/Home';
import FAQ from './pages/public/FAQ';
import ReportCrime from './pages/public/ReportCrime';
import SOSButton from './pages/public/SOSButton';
import TrackComplaint from './pages/public/TrackComplaint';
import Unauthorized from './pages/public/Unauthorized';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import GoogleLoginButton from './pages/auth/GoogleLoginButton';
import UserDashboard from './pages/user/UserDashboard';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/report-crime" element={<ReportCrime />} />
        <Route path="/sos" element={<SOSButton />} />
        <Route path="/track-complaint" element={<TrackComplaint />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/google-login" element={<GoogleLoginButton />} />

        {/* Protected Dashboard Route (any logged-in user) */}
        <Route element={<PrivateRoute />}> 
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<RoleBasedRoute allowedRoles={['admin']} />}> 
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/reports-analytics" element={<ReportsAnalytics />} />
          <Route path="/admin/system-logs" element={<SystemLogs />} />
        </Route>

        {/* Police Routes */}
        <Route element={<RoleBasedRoute allowedRoles={['police']} />}> 
          <Route path="/police-dashboard" element={<PoliceDashboard />} />
          <Route path="/police/criminal-search" element={<CriminalSearch />} />
          <Route path="/police/fir-management" element={<FIRManagement />} />
          <Route path="/police/live-stats" element={<LiveStats />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
