import { Image, Text, TouchableOpacity, FlatList, Linking, SafeAreaView } from 'react-native'
import { Button, HStack, Icon, Input, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modalbox';
import Clipboard from '@react-native-clipboard/clipboard';
import { IconEntypo, IconIonicons } from '../../../Utils/IconHelper';
import ScrollViewComponent from '../../../Components/ScrollView';
import { SCREEN_WIDTH } from '../../../Constants/constants';
import BaseScreen from '../../BaseScreen';
import colors from '../../../Style/colors';

type Props = {}

const url = 'https://chietkhau1688.vn/flutter/random?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk0MCwiZW1haWwiOiJmZHNhZmRzYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRvaXNsIiwidGltZSI6IjIwMjMtMDItMDIgMDE6MDk6MTIifQ.sVy_Epv_cvqU0IF9k6e0or3kaaWFVYwSn05wv-HQj64&web=1&platform=2';
const url2 = 'https://chietkhau1688.vn/flutter/random?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk0MCwiZW1haWwiOiJmZHNhZmRzYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRvaXNsIiwidGltZSI6IjIwMjMtMDItMDcgMjA6MTQ6NDkifQ.pItADEeBqpqIU0vgMdKBBSowG4jJzJ8y8ivByBmZVa4&web=2&platform=2';

const data = [
  'https://tcorder.vn/wp-content/uploads/2020/08/san-hang-sale-trung-quoc.jpg',
  'https://config.meoconbanhang.com/upload-image/4seller-banner-hdsd.png',
  'https://tieuthantai.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/08/11020627/unnamed-1.jpg'
]

const SearchProduct: React.FC<Props> = () => {
  const ref_modal = React.useRef<Modal>(null);
  const [lstData, setlstData] = useState<any[]>([])
  const [itemSeleted, setItemSeleted] = useState<any | null>(null)
  const [keySearch, setKeySearch] = useState<string>('')

  const getData = () => {
    fetch(url2, { method: 'GET' }).
      then(rs => rs.json()).
      then(value => {
        if (value.code == 'SUCCESS')
          setlstData(JSON.parse(value.data) as any[]);
      }).catch(err => { })
  }

  const copyToClipboard = (val: string) => {
    Clipboard.setString(val);
  };


  const onpenLink = async (url: string) => {
    await Linking.openURL(url);
  }

  const handleChangeKeySearch = (val: string) => setKeySearch(val);

  useEffect(() => {
    getData();
  }, [])


  const renderItem = ({ item }: { item: any }) => (
    <HStack style={styles.viewItem} space={2}>
      <Image source={{ uri: item.img }} style={styles.imageItem} resizeMode='cover' />

      <VStack flex={1}>
        <VStack flex={1} >
          <View>
            <Text style={styles.textValue} numberOfLines={1} ellipsizeMode='tail'><Text style={{ color: '#f43f5e', fontWeight: 'bold' }}>TAO</Text> {item.name}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>Chiết khấu: ￥{item.rate}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>Giá thành: ￥{item.price}</Text>
          </View>
        </VStack>
        <HStack space={2}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => onpenLink(item.url)}>
            <HStack style={styles.btnLink}>
              <Text style={{ color: colors.red }}>Lấy liên kết</Text>
            </HStack>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setItemSeleted(item);
            ref_modal.current?.open();
          }}>
            <HStack style={styles.btnShare}>
              <IconEntypo name='share' size={24} color='#06b6d4' />
            </HStack>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </HStack>
  )
  return (
    <BaseScreen title='Tìm kiếm'>
      <VStack flex={1} space={3} pt={4}>
        <HStack space={2} px={3}>
          <Input
            value={keySearch}
            onChangeText={handleChangeKeySearch}
            placeholder="Tìm kiếm"
            borderRadius={10}
            fontSize={14}
            color='#000'
            flex={1}
            colorScheme='light'
            InputLeftElement={<Icon as={<IconIonicons name='search' />} size={5} ml="2" color='blue.500' />}
          />
          <HStack px={5} alignItems='center' justifyContent='center' bgColor='blue.400' borderRadius={10}>
            <IconIonicons name='search' size={24} color='#fff' />
          </HStack>
        </HStack>
        <FlatList
          data={lstData}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'home' + index.toString()}
          scrollEnabled={false}
        />

      </VStack>
      <Modal
        ref={ref_modal}
        coverScreen
        swipeToClose
        position={'center'}
        style={styles.viewModal}>
        {itemSeleted &&
          <VStack style={styles.viewContentModal} >
            <HStack space={2}>
              <Image source={{ uri: itemSeleted.img }} resizeMode='cover' style={styles.imgModal} />
              <VStack flex={1}>
                <Text numberOfLines={1} ellipsizeMode='tail'><Text style={{ color: '#f43f5e', fontWeight: 'bold' }}>
                  TAO </Text>
                  {itemSeleted.name}
                </Text>
                <Text numberOfLines={1} ellipsizeMode='tail'>Chiết khấu: ￥{itemSeleted.rate}</Text>
                <Text numberOfLines={1} ellipsizeMode='tail'>Giá thành: ￥{itemSeleted.price}</Text>
              </VStack>
            </HStack>

            <HStack space={4}>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                copyToClipboard(itemSeleted.url);
                ref_modal.current?.close();
              }}>
                <HStack style={styles.btnShare}>
                  <Text style={{ color: '#06b6d4' }}>Copy Link</Text>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                copyToClipboard(itemSeleted.phone);
                ref_modal.current?.close();
              }}>
                <HStack style={styles.btnLink}>
                  <Text style={{ color: '#06b6d4' }}>Copy Phone</Text>
                </HStack>
              </TouchableOpacity>
            </HStack>
          </VStack>}
      </Modal>
    </BaseScreen>
  )
}

export default SearchProduct
