import { Script } from 'gatsby';
import React, { FC, useState, useEffect } from 'react';

interface SEOProps {
  title: string;
}

const SEO: FC<SEOProps> = ({ title }) => {
  const [hide, setHide] = useState(true);
  const [marketoLoadead, setMarketoLoadead] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 1000);
  }, []);

  console.log(hide);

  return (
    <>
      {/* Using state does NOT work outside of loading Script components */}
      {marketoLoadead && <title>{title}</title>}
      {!hide && (
        <meta name="description" content="Loads 1 second after mount" />
      )}
      {!hide && (
        <script async src="https://www.gstatic.com/devrel-devsite/prod/ve7ce216351f398481fccad3cbbc60c699e78bde8533bfe4daa150955665bb2bf/js/analytics_library.js"></script>
      )}
      <meta name="robots" content={`${hide ? 'no' : ''}index`} />
      {/* Loading Scripts with state DOES work regardless of how state is changed */}
      {!hide && (
        <Script
          id="gtm-test"
          src="https://www.googletagmanager.com/ns.html?id=GTM-N5NSCWL"
          onLoad={() => console.log('GTM loaded')}
        />
      )}
      {/* Conditionally loading off-main-thread Scripts does NOT work */}
      <Script
        id="marketo-test"
        src="https://munchkin.marketo.net/munchkin.js"
        onLoad={() => {
          console.log('marketo loaded');
          setMarketoLoadead(true);
        }}
      />
      {marketoLoadead && (
        <Script
          id="marketo-test"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="off-main-thread"
        />
      )}
    </>
  );
};

export default SEO;
