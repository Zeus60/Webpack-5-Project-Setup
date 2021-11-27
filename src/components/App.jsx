import '../styles/index.scss';

import Recipes from './Recipes';

const App = () => {
  return (
    <>
      <section classname="hero"></section>
      <main>
        <section>
          <h1>Hey, React is Working!</h1>
        </section>
      </main>

      <Recipes />
    </>
  );
};

export default App;
