import * as React from 'react';
import SEO from '../components/SEO';
import Home from '../components/Home';

const IndexPage = () => {
  return <Home />;
};

export default IndexPage;

export const Head = () => <SEO title="Homepage" />;
