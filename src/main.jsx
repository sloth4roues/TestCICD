import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://072160ba08d54ae203c7a271fa7bad78@o4510120303460352.ingest.de.sentry.io/4510120315715664",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

const container = document.getElementById(“app”);
const root = createRoot(container);
root.render(<App />);

// Add this button component to your app to test Sentry's error tracking
function ErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error('This is your first error!');
      }}
    >
      Break the world
    </button>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


