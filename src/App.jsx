import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ServiceTable from './components/ServiceTable';
import { Button } from './components/ui/button';
// import { Form } from './components/ui/form';
import { DialogDemo } from './components/DialogDemo';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ServiceTable />
      </div>
    </Provider>
  );
};

export default App;
