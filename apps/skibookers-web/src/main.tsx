import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';

import App from './app/app';
import { queryClient } from './app/lib/query-client';
import { AuthProvider } from './app/context/auth';
import { GlobalStateProvider } from './app/context/app-global';

// ─────────────────────────────────────────────────────────────────────────────

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// ─────────────────────────────────────────────────────────────────────────────

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GlobalStateProvider>
            <App />
          </GlobalStateProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
