import React from 'react';
// wrapPageElement and wrapRootElement should be the same between gatsby-ssr.tsx and gatsby-browser.tsx
// @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-script/#usage-in-gatsby-ssr-and-browser-apis

import type { GatsbySSR } from 'gatsby';
import JqueryScript from './src/components/JqueryScript';

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => (
  <>
    <JqueryScript />
    {element}
  </>
);
