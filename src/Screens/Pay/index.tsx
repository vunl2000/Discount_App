import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BaseScreen from '../BaseScreen'
import { HStack, Pressable, VStack } from 'native-base'
import styles from './styles'
import { IconFontAwesome, IconIonicons } from '../../Utils/IconHelper'
import { Dropdown } from 'react-native-element-dropdown'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../Constants/screens'
import Modal from 'react-native-modalbox'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const dataFilter = [
    {
        value: 'Hôm nay',
        code: 'TO_DAY'
    },
    {
        value: 'Hôm qua',
        code: 'YES_TER_DAY'
    },
    {
        value: 'Tuần này',
        code: 'WEEK_DAY'
    }
]

const PayScreen: React.FC<Props> = (prop) => {
    const navigation: any = useNavigation();
    const ref_modal = React.createRef<Modal>();
    const [dayOf, onChangeDay] = React.useState<string>('TO_DAY');

    const [isFocus, setIsFocus] = React.useState(false);

    const onChangeDayOf = (item: { value: string, code: string }) =>
        onChangeDay(item.code);


    const goToWithDraw = () => navigation.navigate(SCREENS.LINK_CARD)
    const goToHistoryWithDraw = () => navigation.navigate(SCREENS.HISTORY_WITHDRAW)

    const openModal = () => ref_modal.current?.open();
    const closeModal = () => ref_modal.current?.close();

    return (
        <BaseScreen title='Ví tiền'>
            <VStack flex={1} bgColor='blueGray.100' space={4}>
                <VStack bgColor='#0e6eb8' alignItems='center' justifyContent='center' py={5} px={3} space={2}>
                    <Text style={styles.textMoney}>0.00</Text>
                    <Text style={{ ...styles.textMoney, fontSize: 16, fontWeight: '400' }}>Số tiền có thể rút</Text>
                </VStack>


                <HStack style={styles.shadown} py={2} >

                    <TouchableOpacity onPress={openModal} style={{ flex: 1, height: 'auto', minHeight: 50 }}>
                        <VStack flex={1} alignItems='center' justifyContent='center' space={1}>
                            <IconIonicons name='logo-usd' size={24} color='#333' />
                            <Text style={styles.textValue}>Rút tiền</Text>
                        </VStack>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToWithDraw} style={{ flex: 1, height: 'auto', minHeight: 50 }}>
                        <VStack flex={1} alignItems='center' justifyContent='center' space={1}>
                            <IconIonicons name='card-outline' size={24} color='#333' />
                            <Text style={styles.textValue}>Thẻ liên kết</Text>
                        </VStack>
                    </TouchableOpacity>
                </HStack>

                <TouchableOpacity onPress={goToHistoryWithDraw} activeOpacity={1}>
                    <HStack style={styles.shadown} py={4} px={3}>
                        <HStack flex={1} alignItems='center' space={3}>
                            <IconIonicons name='logo-usd' size={24} color='#333' />
                            <Text style={styles.textValue}>Lịch sử rút tiền</Text>
                        </HStack>
                        <IconIonicons name='chevron-forward' size={24} color='#333' />
                    </HStack>
                </TouchableOpacity>


                <VStack style={{ ...styles.shadown, margin: 0 }}>
                    <HStack style={styles.viewPage} space={2}>
                        <HStack flex={1} space={2} alignItems='center'>
                            <IconIonicons name='ios-stats-chart' size={24} color='#fff' />
                            <Text style={{ ...styles.textValue, fontSize: 16, color: '#fff' }} > Thống kê</Text>
                        </HStack>
                        <HStack flex={1}>
                            <Dropdown
                                data={dataFilter}
                                value={dayOf}
                                valueField={'code'}
                                labelField={'value'}
                                onChange={onChangeDayOf}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                style={styles.dropDown}
                                activeColor='#bae6fd'
                                itemTextStyle={styles.itemSeleted}
                                selectedTextStyle={styles.itemSeleted}
                                renderRightIcon={() => (
                                    <IconIonicons
                                        style={styles.icon}
                                        color={isFocus ? 'blue' : 'black'}
                                        name={isFocus ? 'ios-caret-up' : "ios-caret-down"}
                                        size={20}
                                    />
                                )}
                            />
                        </HStack>
                    </HStack>
                    <HStack p={5}>
                        <VStack flex={1} pl={3}>
                            <Text style={styles.textValue}>Thành công</Text>
                            <Text style={styles.textNote}>0.00</Text>
                        </VStack>

                        <VStack flex={1} pl={3}>
                            <Text style={styles.textValue}>Chờ giao dịch</Text>
                            <Text style={styles.textNote}>0.00</Text>
                        </VStack>
                    </HStack>

                    <HStack p={5}>
                        <VStack flex={1} pl={3}>
                            <Text style={styles.textValue}>Giới thiệu</Text>
                            <Text style={styles.textNote}>0.00</Text>
                        </VStack>

                        <VStack flex={1} pl={3}>
                            <Text style={styles.textValue}>Đã rút</Text>
                            <Text style={styles.textNote}>0.00</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </VStack >
            <Modal
                ref={ref_modal}
                style={styles.modalContent}
                position='bottom'
                coverScreen
                backButtonClose>
                <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
                    <VStack flex={1} pt={4} bgColor='blueGray.100'>
                        <TouchableOpacity activeOpacity={1} onPress={goToWithDraw}>
                            <HStack style={styles.shadown} py={4} alignItems='center' space={3} pl={3}>
                                <IconFontAwesome name='credit-card' size={24} color='#333' />
                                <Text style={{ ...styles.textValue, fontWeight: 'bold' }}>Thêm phương thức rút tiền</Text>
                            </HStack>
                        </TouchableOpacity>
                    </VStack>
                </SafeAreaView>
            </Modal>
        </BaseScreen >
    )
}

export default PayScreen
