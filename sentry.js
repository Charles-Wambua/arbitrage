import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Assuming you have an App component

Sentry.init({
  dsn: "https://3d5cfab6972f5f4db43907c95046578a@o4507651680108544.ingest.us.sentry.io/4507651686858752",
  integrations: [
    new Sentry.BrowserTracing(), // Corrected integration names
    new Sentry.Replay(),         // Corrected integration names
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
