import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />

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
  </React.StrictMode>
);
