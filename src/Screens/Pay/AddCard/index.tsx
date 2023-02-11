import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { Button, Divider, FlatList, HStack, Icon, Input, Skeleton, VStack } from 'native-base'
import BaseScreen from '../../BaseScreen'
import { SCREEN_WIDTH } from '../../../Constants/constants'
import styles from './styles'
import { Dropdown } from 'react-native-element-dropdown'
import ArrayHelper from '../../../Utils/ArrayHelper'
import { IconAntDesign, IconFeather, IconFontAwesome, IconIonicons, IconMaterialCommunityIcons, IconMaterialIcons } from '../../../Utils/IconHelper'
import Modal from 'react-native-modalbox'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BanksModel } from './model'
import StringHelper from '../../../Utils/StringHelper'

type Props = {}

const urlListBank = 'https://api.vietqr.io/v2/banks';

const imgEmpty = require('../../../Accsets/image/empty_bank.png');


const dataDropDown = [
    {
        code: 'ALIPAY',
        value: 'ALIPAY'
    },
    {
        code: 'BANK_CN',
        value: 'Ngân hàng Trung Quốc'
    },
    {
        code: 'BANK_VN',
        value: 'Ngân hàng Việt Nam'
    },
]

const EmptyData = () => (
    <VStack mt={120} alignItems='center' justifyContent='center' space={4}>
        <Image source={imgEmpty} resizeMode='cover' style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8, alignSelf: 'center' }} />
        <Text style={styles.textEmpty}>Không có đơn hàng nào.</Text>
    </VStack>
)


const AddCard: React.FC<Props> = (props) => {
    const ref_modal = React.createRef<Modal>();
    const [bankAccount, setLstBankAccount] = React.useState<BanksModel[]>([]);
    const [bankAccountVN, setBankAccountVN] = React.useState<BanksModel | null>(null);
    const [bankName, setBankName] = React.useState<string>('');
    const [numberAlipay, setNumberAlipay] = React.useState<string>('');
    const [accountName, setAccountName] = React.useState<string>('');
    const [accountNumber, setAccountNumber] = React.useState<string>('');
    const [phoneNumber, setPhoneNumber] = React.useState<string>('');
    const [typeCard, setTypeCard] = React.useState<string>('ALIPAY');

    const onChangeTypeCard = (item: { code: string, value: string }) => {
        setTypeCard(item.code);
    }

    const getBankAccount = () => {
        console.log('zzzzz');
        fetch(urlListBank)
            .then(result => result.json())
            .then(data => {
                if (data) {
                    setLstBankAccount(data.data);
                }
            }).catch((err) => { });
    }

    const handleChangeAlipay = (val: string) => setNumberAlipay(val);
    const handleChangeBankName = (val: string) => setBankName(val);
    const handleChangeAccountName = (val: string) => setAccountName(val);
    const handleChangeAccountNumber = (val: string) => setAccountNumber(val);
    const handleChangePhoneNumber = (val: string) => setPhoneNumber(val);

    const openModal = () => ref_modal.current?.open();
    const closeModal = () => ref_modal.current?.close();

    const onPressItem = (item: BanksModel) => {
        closeModal();
        setBankAccountVN(item);
    }

    const renderItem = ({ item, index }: { item: BanksModel, index: number }) => (
        <TouchableOpacity onPress={() => onPressItem(item)}>
            {index === 0 && <Divider />}
            <HStack bgColor='#fff' w='100%' alignItems='center' space={2} px={2}>
                <Image source={{ uri: item.logo }} style={styles.imageItem} resizeMode='contain' />
                <VStack w='100%' flex={1} justifyContent='center' py={2}>
                    <Text style={{ ...styles.textLabel, flex: 1, textAlignVertical: 'center' }}>{item.shortName}</Text>
                    <Text style={{ ...styles.textSubLabel, flex: 1, textAlignVertical: 'center' }}
                        numberOfLines={2}>{item.name}</Text>
                </VStack>
            </HStack>
            <Divider />
        </TouchableOpacity>
    )

    React.useEffect(() => {
        getBankAccount();
    }, []);

    return (
        <BaseScreen title='Thêm tài khoản rút tiền'>
            <VStack flex={1} bgColor='blueGray.100' space={4} pt={4} px={3}>
                <Dropdown
                    data={dataDropDown}
                    valueField='code'
                    labelField='value'
                    value={typeCard}
                    onChange={onChangeTypeCard}
                    itemTextStyle={{ fontSize: 14, color: '#333' }}
                    selectedTextStyle={{ fontSize: 14, color: '#000' }}
                    style={[styles.dropDown, styles.shadown]}
                />

                {typeCard == 'ALIPAY' &&
                    <Input
                        value={numberAlipay}
                        onChangeText={handleChangeAlipay}
                        placeholder="Số tài khoản Alipay"
                        borderRadius={10}
                        fontSize={14}
                        color='#000'
                        InputLeftElement={<Icon as={<IconAntDesign name="alipay-square" />} size={5} ml="2" color='blue.500' />}
                    />}
                {typeCard == 'BANK_CN' &&
                    <Input
                        value={bankName}
                        onChangeText={handleChangeBankName}
                        placeholder="Tên ngân hàng"
                        borderRadius={10}
                        fontSize={14}
                        color='#000'
                        colorScheme='light'
                        InputLeftElement={<Icon as={<IconMaterialCommunityIcons name="domain" />} size={5} ml="2" color='blue.500' />}
                    />}
                {typeCard == 'BANK_VN' &&
                    <TouchableOpacity activeOpacity={1} onPress={openModal}>
                        {!bankAccountVN && <HStack style={{ ...styles.shadown, ...styles.selectNganHang }} space={2} >
                            <IconMaterialCommunityIcons name="domain" size={22} color='#3b82f6' />
                            <Text style={{ fontSize: 14, color: '#000', flex: 1 }}>Chọn ngân hàng</Text>
                            <IconIonicons name='chevron-down' size={16} color='#000' />
                        </HStack>}
                        {bankAccountVN &&
                            <HStack bgColor='#fff' alignItems='center' space={2} px={2} style={{ ...styles.shadown, borderRadius: 10 }}>
                                <Image source={{ uri: bankAccountVN.logo }} style={styles.imageItem} resizeMode='contain' />
                                <VStack w='100%' flex={1} justifyContent='center' py={2}>
                                    <Text style={{ ...styles.textLabel, textAlignVertical: 'center' }}>{bankAccountVN.shortName}</Text>
                                    <Text style={{ ...styles.textSubLabel, flex: 1, textAlignVertical: 'center' }}
                                        numberOfLines={2}>{bankAccountVN.name}</Text>
                                </VStack>
                            </HStack>}
                    </TouchableOpacity>
                }
                {typeCard != 'ALIPAY' &&
                    <Input
                        value={accountNumber}
                        onChangeText={handleChangeAccountNumber}
                        placeholder="Số tài khoản"
                        borderRadius={10}
                        fontSize={14}
                        color='#000'
                        colorScheme='light'
                        InputLeftElement={<Icon as={<IconMaterialCommunityIcons name="credit-card" />} size={5} ml="2" color='blue.500' />}
                    />}

                <Input
                    value={accountName}
                    onChangeText={handleChangeAccountName}
                    placeholder="Tên tài khoản"
                    borderRadius={10}
                    fontSize={14}
                    color='#000'
                    colorScheme='light'
                    InputLeftElement={<Icon as={<IconMaterialIcons name="person" />} size={5} ml="2" color='blue.500' />}
                />

                <Input
                    value={phoneNumber}
                    onChangeText={handleChangePhoneNumber}
                    placeholder="Số điện thoại"
                    borderRadius={10}
                    fontSize={14}
                    color='#000'
                    colorScheme='light'
                    InputLeftElement={<Icon as={<IconMaterialIcons name="phone" />} size={5} ml="2" color='blue.500' />}
                />
            </VStack>
            <Button colorScheme='info' m={4} onPress={() => { }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Thêm mới</Text>
            </Button>
            <Modal
                ref={ref_modal}
                style={{ flex: 1, backgroundColor: 'rbga(0,0,0,0.5)' }}
                coverScreen
                backButtonClose>
                <SafeAreaView style={{ flex: 1 }}>
                    <VStack style={styles.viewModal} space={2}>
                        <HStack space={4}>
                            <TouchableOpacity onPress={closeModal}>
                                <IconFeather allowFontScaling={false} name="x" style={{ fontSize: 24, color: '#000' }} />
                            </TouchableOpacity>
                            <Text style={{ ...styles.textLabel, flex: 1 }}>Danh sách ngân hàng</Text>
                        </HStack>
                        <FlatList
                            data={bankAccount}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => 'banker' + index.toString()}
                        />
                    </VStack>
                </SafeAreaView>
            </Modal>
        </BaseScreen>
    )
}

export default AddCard;
