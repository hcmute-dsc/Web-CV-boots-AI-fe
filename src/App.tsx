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
    <Router>
      <Nvbar />
      {/* Thêm padding top để không bị che */}
      <main className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cvgenerate" element={<Generate />} />
          <Route path="/cvsamples" element={<Samples />} />
          <Route path="/cvtips" element={<Tips />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
