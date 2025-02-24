import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import BlogPage from "./Pages/Blog";
import Work from "./Pages/Work";
import NotePad from "./components/sections/BlogPage/Tiptap/NotePad";
import NotFound from "./Pages/NotFound";
import BlogData from "./Pages/BlogPage";
import DarkLight from "./components/common/DarkLight";
import BackToTop from "./components/common/BackToTop";
import CircleFollowMouse from "./hooks/use-follow-pointer";
import CookieSettings from "./Pages/Legal/CookieSettings";
import PrivacyPolicy from "./Pages/Legal/PrivacyPolicy";
import TermsOfService from "./Pages/Legal/TermsOfService";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogData />} />
          <Route path="/work" element={<Work />} />
          <Route path="/notepad/*" element={<NotePad />} />
          <Route path="/legal/*" element={
            <Routes>
              <Route path="cookies" element={<CookieSettings />} />
              <Route path="terms" element={<TermsOfService />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
            </Routes>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <BackToTop />
        <DarkLight />
        <CircleFollowMouse />
      </div>
    </BrowserRouter>
  );
}

export default App;
