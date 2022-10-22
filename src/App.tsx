import Header from '@/components/Layout/Header';
import Meals from './components/Meals/Meals';
import { Fragment } from 'react';
import '@/App.css';

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
