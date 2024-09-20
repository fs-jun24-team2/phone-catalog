import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { store } from './app/store';
import i18n from './i18n';
import { Root } from './Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Root />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);
