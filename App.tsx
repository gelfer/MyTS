import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './app/store';
import AppNavigator from './app/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
