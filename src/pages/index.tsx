import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Home from '../components/Home';
import { Script } from 'gatsby';

const IndexPage = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 1000);
  }, []);

  return (
    <>
      <Home />
      {/* Conditionally calling Script doesn't work even outside Gatsby Head */}
      {!hide && (
        <Script
          id="bizible-test"
          src="https://cdn.bizible.com/scripts/bizible.js"
          strategy="off-main-thread"
        />
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Homepage" />;
