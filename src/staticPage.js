import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Head from 'components/Head';

const Page = ({ children, title, assetsByChunkName }) => (
  <html lang="en-us">
    <Head title={title} assetsByChunkName={assetsByChunkName}/>
    {children}
  </html>
);

export default ({ title, Component, assetsByChunkName }) =>
  ReactDOMServer.renderToStaticMarkup(
    <Page title={title} assetsByChunkName={assetsByChunkName}>
      <Component assetsByChunkName={assetsByChunkName}/>
    </Page>
  );
