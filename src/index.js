import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import feather from 'feather-icons';
// import * as Sentry from '@sentry/react';
import * as Sentry from '@sentry/browser';


Sentry.init({
  dsn: "https://f5037506d1825f4abbfea5a076421857@o4507651680108544.ingest.us.sentry.io/4507661307084800",
  // integrations: [
  //   Sentry.browserTracingIntegration(),
  //   Sentry.replayIntegration(),
  // ],
  integrations: [Sentry.browserTracingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    "localhost",
    /^https:\/\/yourserver\.io\/api/,
    "https://arbitrage-perfumes-ke.onrender.com/"
],

  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);

feather.replace();
