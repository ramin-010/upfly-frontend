import Header from './components/Header-new';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSectionNew';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      {/* <TechnicalFlowDiagram /> */}
      {/* <InstallSection /> */}
      <Footer />
      {/* <ProductionReadySection/> */}
    </div>
  );
}

export default App;
