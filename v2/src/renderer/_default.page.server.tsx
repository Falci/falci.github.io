import ReactDOMServer from 'react-dom/server';
import {
  dangerouslySkipEscape,
  escapeInject,
  PageContextBuiltIn,
} from 'vite-plugin-ssr';
import { PageContext } from '../types';

export { render };

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>Fernando Falci</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
