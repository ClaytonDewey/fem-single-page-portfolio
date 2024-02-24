import React from 'react';
import { Header } from './';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Header />
      <main className='container'></main>
    </>
  );
};
export default App;
