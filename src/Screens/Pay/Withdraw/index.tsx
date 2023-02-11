import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { Button, Skeleton, VStack } from 'native-base'
import BaseScreen from '../../BaseScreen'
import { SCREEN_WIDTH } from '../../../Constants/constants'
import styles from './styles'
import { BanksModel } from '../AddCard/model'
import ArrayHelper from '../../../Utils/ArrayHelper'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../../Constants/screens'

type Props = {}

const imgEmpty = require('../../../Accsets/image/empty_bank.png');

const EmptyData = () => (
    <VStack mt={120} alignItems='center' justifyContent='center' space={4}>
        <Image source={imgEmpty} resizeMode='cover' style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8, alignSelf: 'center' }} />
        <Text style={styles.textEmpty}>Không có dữ liệu</Text>
    </VStack>
)

const Withdraw: React.FC<Props> = (props) => {
    const navigation: any = useNavigation();
    const [bankAccount, setLstBankAccount] = React.useState<BanksModel[]>([]);

    const goToAddCard = () => navigation.navigate(SCREENS.ADD_CARD);

    return (
        <BaseScreen title='Tài khoản rút tiền'>
            <VStack flex={1} bgColor='blueGray.100' space={4} pt={4}>
                {ArrayHelper.IsNullOrEmpty(bankAccount) &&
                    <VStack>
                        <EmptyData />
                    </VStack>
                }
                {!ArrayHelper.IsNullOrEmpty(bankAccount) &&
                    <Skeleton flex={1} />}
            </VStack>
            <Button colorScheme='info' m={4} onPress={goToAddCard}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Thêm mới</Text>
            </Button>
        </BaseScreen>
    )
}

export default Withdraw;
