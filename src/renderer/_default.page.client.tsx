import { hydrateRoot } from 'react-dom/client';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';
import { PageContext } from '../types';

import '../index.css';

export { render };

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page, pageProps } = pageContext;
  const container = document.getElementById('page-view');
  if (container) {
    hydrateRoot(container, <Page {...pageProps} />);
  }
}
