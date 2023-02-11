import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import BaseScreen from '../../BaseScreen'
import { VStack, View, HStack } from 'native-base'
import styles from './styles'
import { IconIonicons } from '../../../Utils/IconHelper'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../../Constants/screens'

type Props = {}

const DetailAccount: React.FC<Props> = (props) => {
    const navigation: any = useNavigation();

    const goChangePass = () => navigation.navigate(SCREENS.CHANGE_PASS);

    return (
        <BaseScreen title='Thông tin tài khoản'>
            <VStack flex={1} bgColor='blueGray.100' space={4} pt={4}>
                <HStack style={{ ...styles.shadown, ...styles.columView }} >
                    <Text style={{ ...styles.textValue, color: '#555' }}>Tên đăng nhập</Text>
                    <Text style={styles.textValue}>Admin</Text>
                </HStack>
                <HStack style={{ ...styles.shadown, ...styles.columView }} >
                    <Text style={{ ...styles.textValue, color: '#555' }}>Email</Text>
                    <Text style={styles.textValue}>admin1234@gmail.com</Text>
                </HStack>

                <TouchableOpacity activeOpacity={1} onPress={goChangePass}>
                    <HStack style={{ ...styles.shadown, ...styles.columView }} >
                        <Text style={styles.textValue}>Đổi mật khẩu</Text>
                        <IconIonicons name='chevron-forward' size={24} color='#000' />
                    </HStack>
                </TouchableOpacity>

            </VStack>
        </BaseScreen>
    )
}

export default DetailAccount;