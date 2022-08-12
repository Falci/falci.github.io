import ReactDOM from 'react-dom';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';
import { PageContext } from '../types';

import '../index.css';

export { render };

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <Page {...pageProps} />,
    document.getElementById('page-view')
  );
}
