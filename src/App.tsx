import Header from '@/components/Layout/Header';
import '@/App.css';
import Meals from './components/Meals/Meals';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
