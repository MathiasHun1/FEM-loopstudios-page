import styles from './App.module.scss';

import Header from './components/Header/Header';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main></main>
      <footer></footer>
    </div>
  );
};

export default App;
