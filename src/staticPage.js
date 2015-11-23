import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Head from 'components/Head';

const Page = ({ children, title }) => (
  <html lang="en-us">
    <Head title={title}/>
    {children}
  </html>
);

export default ({ title, Component }) =>
  ReactDOMServer.renderToStaticMarkup(
    <Page title={title}>{<Component/>}</Page>
  );
