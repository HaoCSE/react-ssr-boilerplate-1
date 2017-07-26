import React from 'react';

import assetManifest from '../build/asset-manifest.json';

const jsScripts = () => {
  return [
    assetManifest['node-modules.js'],
    assetManifest['main.js']
  ].map(path => (
    <script type="text/javascript" src={path}></script>
  ));
};

const cssLinks = () => {
  return [
    assetManifest['main.css']
  ].map(path => (
    <link rel="stylesheet" href={path} />
  ));
};

const IndexHtml = ({ initialState, children }) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      {cssLinks()}
      <title>React SSR Boilerplate</title>
      <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}` }}></script>
    </head>
    <body>
      <div id="root">{children}</div>
      {jsScripts()}
    </body>
  </html>
);

export default IndexHtml;
