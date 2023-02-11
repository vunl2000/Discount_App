import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BaseScreen from '../BaseScreen'
import { HStack, Toast, VStack } from 'native-base'
import styles from './styles'
import Clipboard from '@react-native-clipboard/clipboard'

type Props = {}

const ShareScreen = (props: Props) => {

    const copyRight = () => {
        Clipboard.setString('https://chietkhau1688.vn/site/signup?ref=GUSOQMQSVSUBQBV');
        Toast.show({
            description: 'Sao chép link giới thiệu thành công',
            placement: "bottom"
        });
    }
    return (
        <BaseScreen title='Giới thiệu'>
            <VStack flex={1} bgColor='blueGray.100' space={3}>

                <HStack mt={5}>
                    <HStack p={2} flex={1} alignItems='center' style={{ ...styles.shadown, }}>
                        <Text style={{ ...styles.textLable, marginHorizontal: 8 }}>
                            https://chietkhau1688.vn/site/signup?ref=GUSOQMQSVSUBQBV
                        </Text>
                    </HStack>
                    <TouchableOpacity activeOpacity={1} onPress={copyRight} >
                        <HStack alignItems='center' px={5} py={3} style={{ ...styles.shadown, marginLeft: 0 }} flex={1}>
                            <Text style={styles.textLable}>Copy</Text>
                        </HStack>
                    </TouchableOpacity>
                </HStack>

                <HStack p={3} style={styles.shadown}>
                    <HStack flex={1} justifyContent='center'>
                        <VStack alignItems='center'>
                            <Text style={styles.textValue}>Thành viên</Text>
                            <Text style={{ ...styles.textValue, fontSize: 20, color: '#000', fontWeight: '500' }}>0</Text>
                        </VStack>
                    </HStack>
                    <HStack flex={1} justifyContent='center'>
                        <VStack alignItems='center'>
                            <Text style={styles.textValue}>Tiền giới thiệu</Text>
                            <Text style={{ ...styles.textValue, fontSize: 20, color: '#000', fontWeight: '500' }}>0.00 VND</Text>
                        </VStack>
                    </HStack>
                </HStack>

                <HStack px={3}>
                    <Text style={{ flex: 1, ...styles.textValue }}>Giới thiệu bạn qua link giới thiệu để hưởng hoa hồng và nhiều ưu đãi</Text>
                </HStack>
            </VStack>
        </BaseScreen >
    )
}

export default ShareScreen