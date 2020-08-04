import React from 'react';
import { Form, Item } from './components'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Item />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
