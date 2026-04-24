import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import JobsIndex from './pages/JobsIndex';
import JobDetail from './pages/JobDetail';
import ApplyForm from './pages/ApplyForm';
import Success from './pages/Success';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminCandidates from './pages/AdminCandidates';
import CandidateDetail from './pages/CandidateDetail';
import Analytics from './pages/Analytics';
import AdminJobListings from './pages/AdminJobListings';
import AdminAddJob from './pages/AdminAddJob';
import PlacementCost from './pages/PlacementCost';


function ScrollToTopWrapper() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsIndex />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/:id/apply" element={<ApplyForm />} />
        <Route path="/jobs/:id/apply/success" element={<Success />} />
        <Route path="/costs" element={<PlacementCost />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Future Admin Routes (Placeholder) */}
        <Route path="/admin/jobs" element={<AdminJobListings />} />
        <Route path="/admin/jobs/new" element={<AdminAddJob />} />
        <Route path="/admin/candidates" element={<AdminCandidates />} />
        <Route path="/admin/candidates/:id" element={<CandidateDetail />} />
        <Route path="/admin/reports" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
