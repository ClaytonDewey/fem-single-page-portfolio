import { Contact, Hero, Projects, Skills } from './components';

const App = () => {
  return (
    <>
      <Hero />
      <main>
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  );
};
export default App;
