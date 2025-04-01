import Nvbar from "./components/Nvbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tips from "./pages/CVTips";
import FAQ from "./pages/FAQ";
import Generate from "./pages/CVGenerate";
import Samples from "./pages/CVSamples";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex flex-col bg-white min-h-screen">
          <Nvbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/cvgenerate" element={<Generate />} />
              <Route path="/cvsamples" element={<Samples />} />
              <Route path="/cvtips" element={<Tips />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
