import type data from './data.json';

export type EntityType = typeof data['experience'][number];

export type IconType = ({ className }: { className: string }) => JSX.Element;

export type PageContext = {
  Page: React.ReactNode;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  urlPathname: string;
  pageProps: Record<string, unknown>;
  documentProps?: {
    title: string;
  };
};
