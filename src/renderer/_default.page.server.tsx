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

  const docProps = pageContext.exports?.documentProps;
  const title = docProps?.title ?? 'Fernando Falci';
  const description =
    docProps?.description ??
    'Fernando Falci - Full Stack Engineer. React, Node.js, TypeScript.';
  const canonicalUrl =
    docProps?.canonicalUrl ?? `https://falci.me${pageContext.urlPathname}`;
  const jsonLd = docProps?.jsonLd ?? null;
  const ogImage = 'https://falci.me/images/me.jpeg';

  const jsonLdTag = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    : '';

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="${canonicalUrl}" />

        <meta name="description" content="${description}" />
        <meta name="keywords" content="Fernando Falci, Fernando, Falci, Frontend Engineer, Frontend Developer, Full Stack Developer" />
        <meta name="author" content="Fernando Falci" />

        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Fernando Falci" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:url" content="${canonicalUrl}" />
        <meta property="og:image" content="${ogImage}" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Fernando" />
        <meta property="profile:last_name" content="Falci" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${ogImage}" />

        ${dangerouslySkipEscape(jsonLdTag)}

        <script
          async
          src="https://u.falci.me/script.js"
          data-website-id="5d3212b5-f300-49a2-8906-9d2ec3bdce31"
        ></script>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
