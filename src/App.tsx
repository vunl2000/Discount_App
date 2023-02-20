import React from 'react'
import AppNavigation from './Navigation/index'
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import store, { persistor } from './ConfigRedux/index';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

    return (
        <NativeBaseProvider>
            <Provider {...{ store }}>
                <PersistGate loading={true} persistor={persistor}>
                    <AppNavigation />
                </PersistGate>
            </Provider>
        </NativeBaseProvider>


    )
};

export default App;