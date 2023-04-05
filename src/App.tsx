import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout'
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import AboutPage from "./pages/About";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/privacy";
import Disclaimer from "./pages/disclaimer";
import CustomerSupport from "./pages/support";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
