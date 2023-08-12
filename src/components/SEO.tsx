import { Script } from 'gatsby';
import React, { FC, useState, useEffect } from 'react';

interface SEOProps {
  title: string;
}

const SEO: FC<SEOProps> = ({ title }) => {
  const [hide, setHide] = useState(true);
  const [googleAdsLoaded, setGoogleAdsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 1000);
  }, []);

  console.log(hide);

  return (
    <>
      {googleAdsLoaded && <title>{title}</title>}
      {!hide && (
        <meta name="description" content="Loads 1 second after mount" />
      )}
      <meta name="robots" content={`${hide ? 'no' : ''}index`} />
      {!hide && (
        <Script
          src="https://www.googletagmanager.com/ns.html?id=GTM-N5NSCWL"
          onLoad={() => console.log('GTM loaded')}
        />
      )}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        onLoad={() => setGoogleAdsLoaded(true)}
      />
      {googleAdsLoaded && (
        <Script
          id="bizible-test"
          src="https://cdn.bizible.com/scripts/bizible.js"
          onLoad={() => console.log('bizible loaded')}
        />
      )}
    </>
  );
};

export default SEO;
