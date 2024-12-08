import React from 'react';

import { AppMenu } from './shared/components';
import { AppRoutes } from './routes';
import { AppMenuProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <AppMenuProvider>

      <BrowserRouter>

        <AppMenu>
          <AppRoutes />
        </AppMenu>
        
      </BrowserRouter>

    </AppMenuProvider>
  );
};

