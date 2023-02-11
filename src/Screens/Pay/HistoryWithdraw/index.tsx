import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { Skeleton, VStack } from 'native-base'
import BaseScreen from '../../BaseScreen'
import { SCREEN_WIDTH } from '../../../Constants/constants'
import styles from './styles'
import ArrayHelper from '../../../Utils/ArrayHelper'

type Props = {}

const urlListBank = 'https://api.vietqr.io/v2/banks';

const imgEmpty = require('../../../Accsets/image/empty_bank.png');

const EmptyData = () => (
    <VStack mt={120} alignItems='center' justifyContent='center' space={4}>
        <Image source={imgEmpty} resizeMode='cover' style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8, alignSelf: 'center' }} />
        <Text style={styles.textEmpty}>Không có dữ liệu</Text>
    </VStack>
)

const HistoryWithdraw: React.FC<Props> = (props) => {
    const [bankAccount, setLstBankAccount] = React.useState<any[]>([]);

    return (
        <BaseScreen title='Lịch sử rút tiền'>
            <VStack flex={1} bgColor='blueGray.100' space={4} pt={4}>
                {ArrayHelper.IsNullOrEmpty(bankAccount) &&
                    <VStack>
                        <EmptyData />
                    </VStack>
                }
                {!ArrayHelper.IsNullOrEmpty(bankAccount) &&
                    <Skeleton flex={1} />}
            </VStack>
        </BaseScreen>
    )
}

export default HistoryWithdraw;
