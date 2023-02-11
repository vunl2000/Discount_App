import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import Header from '../Components/Header'

type Props = {
    title: string,
}

const BaseScreen: React.FC<Props & ViewProps> = (props) => {
    return (
        <VStack flex={1} safeArea bgColor='blueGray.100'>
            <Header title={props.title} type='callback' />
            <VStack flex={1}>
                {props.children}
            </VStack>
        </VStack>
    )
}

export default BaseScreen

const styles = StyleSheet.create({})