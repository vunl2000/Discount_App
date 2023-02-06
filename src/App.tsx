import React from 'react'
import AppNavigation from './navigation/index'
import { NativeBaseProvider } from "native-base";
const App = () => {
    return (
        <NativeBaseProvider>
            <AppNavigation />
        </NativeBaseProvider>
    )
};

export default App;