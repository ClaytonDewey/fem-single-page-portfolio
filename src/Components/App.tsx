import React from 'react';
import { SiteIdentity } from './';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className='container'>
      <SiteIdentity />
    </div>
  );
};
export default App;
