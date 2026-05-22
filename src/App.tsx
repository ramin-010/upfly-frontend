import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header-new';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSectionNew';
import Footer from './components/Footer';

import CloudSetup from './pages/CloudSetup';
import ErrorHandling from './pages/ErrorHandling';
import QuickStart from './pages/QuickStart';
import ApiReference from './pages/ApiReference';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloud-setup" element={<CloudSetup />} />
        <Route path="/error-handling" element={<ErrorHandling />} />
        <Route path="/quick-start" element={<QuickStart />} />
        <Route path="/api-reference" element={<ApiReference />} />
      </Routes>
    </Router>
  );
}

export default App;
