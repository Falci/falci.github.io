import ReactDOMServer from 'react-dom/server';
import {
  dangerouslySkipEscape,
  escapeInject,
  PageContextBuiltIn,
} from 'vite-plugin-ssr';
import { PageContext } from '../types';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'documentProps'];

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Fernando Falci</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="Fernando Falci's profile and CV" />
        <meta
          name="keywords"
          content="Fernando Falci, Fernando, Falci, Frontend Engineer, Frontend Developer, Full Stack Developer"
        />
        <meta name="author" content="Fernando Falci" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
