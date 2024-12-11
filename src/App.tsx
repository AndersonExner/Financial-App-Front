import React from 'react';

import { AppMenu } from './shared/components';
import { AppRoutes } from './Routes';
import { AppMenuProvider, AppThemeProvider } from './shared/Contexts';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <AppThemeProvider>
      <AppMenuProvider>

        <BrowserRouter>

          <AppMenu>
            <AppRoutes />
          </AppMenu>
          
        </BrowserRouter>

      </AppMenuProvider>
    </AppThemeProvider>
  );
};

