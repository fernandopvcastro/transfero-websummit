import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

// Firebase
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
