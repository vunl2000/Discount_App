import React from 'react'
import AppNavigation from './Navigation/index'
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
const App = () => {
    return (
        <NativeBaseProvider>
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        </NativeBaseProvider>
    )
};

export default App;