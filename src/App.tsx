import React from 'react'
import AppNavigation from './Navigation/index'
import { NativeBaseProvider } from "native-base";
const App = () => {
    return (
        <NativeBaseProvider>
            <AppNavigation />
        </NativeBaseProvider>
    )
};

export default App;