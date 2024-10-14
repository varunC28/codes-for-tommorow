import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Posts from './components/Posts';
import Loading from './components/Loading';

function App() {
  return (
    <Provider store={store}>
      <Loading>
        <Posts />
      </Loading>
    </Provider>
  );
}

export default App;
