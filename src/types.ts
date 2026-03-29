import type data from './data.json';

export type EntityType = (typeof data)['experience'][number];

export type IconType = ({
  className,
}: {
  className: string;
}) => React.ReactElement;

type DocumentProps = {
  title: string;
  description?: string;
  canonicalUrl?: string;
  jsonLd?: object;
};

export type PageContext = {
  Page: React.ReactNode;
  exports: {
    documentProps?: DocumentProps;
  };
  urlPathname: string;
  pageProps: Record<string, unknown>;
  documentProps?: DocumentProps;
};
