import React, { FC, useEffect, useState } from 'react';

const Home: FC = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setHide(false);
  }, []);

  return (
    <main>
      <h1>Home</h1>
      {!hide && <p>Only appears once mounted</p>}
    </main>
  );
};

export default Home;
