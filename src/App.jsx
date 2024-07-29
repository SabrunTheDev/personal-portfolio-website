import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* Google Analytics setup */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${
          import.meta.env.VITE_APP_PUBLIC_GOOGLE_ANALYTICS
        }`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${
              import.meta.env.VITE_APP_PUBLIC_GOOGLE_ANALYTICS
            }', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </main>
  );
};

export default App;
