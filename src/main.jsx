import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://072160ba08d54ae203c7a271fa7bad78@o4510120303460352.ingest.de.sentry.io/4510120315715664",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
});

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
