import Nvbar from "./components/Nvbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tips from "./pages/CVTips";
import FAQ from "./pages/FAQ";
import Generate from "./pages/CVGenerate";
import Samples from "./pages/CVSamples";

const App = () => {
  return (
    <div>
      <Router>
        <Nvbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cvgenerate" element={<Generate />} />
          <Route path="/cvsamples" element={<Samples />} />
          <Route path="/cvtips" element={<Tips />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
