import React from 'react';
import { useState, useEffect } from 'react';
import { Script } from 'gatsby';

const JqueryScript = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 1000);
  }, []);

  return (
    !hide && (
      <Script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
        //   onLoad={() => console.log('jquery loaded')}
        strategy="off-main-thread"
      />
    )
  );
};

export default JqueryScript;
