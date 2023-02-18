import { Image, Text, TouchableOpacity, FlatList, Linking, SafeAreaView } from 'react-native'
import { Button, HStack, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { IconEntypo, IconIonicons } from '../../Utils/IconHelper';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { SCREEN_WIDTH } from '../../Constants/constants';
import ScrollViewComponent from '../../Components/ScrollView';
import Modal from 'react-native-modalbox';
import Clipboard from '@react-native-clipboard/clipboard';
import { ItemModal } from './ItemModel';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../Constants/screens';

type Props = {}

const url = 'https://chietkhau1688.vn/flutter/random?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk0MCwiZW1haWwiOiJmZHNhZmRzYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRvaXNsIiwidGltZSI6IjIwMjMtMDItMDIgMDE6MDk6MTIifQ.sVy_Epv_cvqU0IF9k6e0or3kaaWFVYwSn05wv-HQj64&web=1&platform=2';
const url2 = 'https://chietkhau1688.vn/flutter/random?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk0MCwiZW1haWwiOiJmZHNhZmRzYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRvaXNsIiwidGltZSI6IjIwMjMtMDItMDcgMjA6MTQ6NDkifQ.pItADEeBqpqIU0vgMdKBBSowG4jJzJ8y8ivByBmZVa4&web=2&platform=2';

const data = [
  'https://tcorder.vn/wp-content/uploads/2020/08/san-hang-sale-trung-quoc.jpg',
  'https://config.meoconbanhang.com/upload-image/4seller-banner-hdsd.png',
  'https://tieuthantai.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/08/11020627/unnamed-1.jpg'
]
const tab = ['Taobao', '1688', 'Pinduoduo']
type TypeLst = 'Taobao' | '1688' | 'Pinduoduo'
const Home: React.FC<Props> = () => {
  const ref_modal = React.useRef<Modal>(null);
  const [lstData, setlstData] = useState<ItemModal[]>([])
  const [itemSeleted, setItemSeleted] = useState<ItemModal | null>(null)
  const [typeList, setTypeList] = useState<TypeLst>('Taobao');

  const navigation: any = useNavigation();

  const gotoSearch = () => navigation.navigate(SCREENS.SEARCH_PRODUCT);

  const getData = () => {
    fetch(url2, { method: 'GET' }).
      then(rs => rs.json()).
      then(value => {
        if (value.code == 'SUCCESS')
          setlstData(value.data as ItemModal[]);
      }).catch(err => {
        console.log(err);
      })
  }

  const copyToClipboard = (val: string) => {
    Clipboard.setString(val);
  };

  const onChangeTab = (type: string) => {
    setTypeList(type as TypeLst);
    getData();
  }

  const onpenLink = async (url: string) => {
    await Linking.openURL(url);
  }

  useEffect(() => {
    getData();
  }, [])

  const RenderTabMenu = () =>
  (<HStack m={2} style={styles.viewTabs}>
    {tab.map((item, i) => (
      <HStack flex={1} p={4} justifyContent='center' key={'tab' + i.toString()}>
        <TouchableOpacity onPress={() => onChangeTab(item)}>
          <Text style={{ ...styles.textLabel, opacity: typeList === item ? 1 : 0.7 }}>{item}</Text>
        </TouchableOpacity>
      </HStack>
    ))}
  </HStack>)

  const renderItem = ({ item }: { item: ItemModal }) => (
    <HStack style={styles.viewItem} space={2}>
      <Image source={{ uri: item.img }} style={styles.imageItem} resizeMode='cover' />

      <VStack flex={1}>
        <VStack flex={1} >
          <View>
            <Text style={styles.textValue} numberOfLines={1} ellipsizeMode='tail'><Text style={{ color: '#f43f5e', fontWeight: 'bold' }}>{typeList == 'Taobao' ? 'TAO' : typeList == '1688' ? '1688' : 'PIN'}</Text> {item.name}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>Chiết khấu: ￥{item.rate}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>Giá thành: ￥{item.price}</Text>
          </View>
        </VStack>
        <HStack space={2}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => onpenLink(item.url)}>
            <HStack style={styles.btnLink}>
              <Text style={{ color: '#06b6d4' }}>Lấy liên kết</Text>
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
    <VStack flex={1} safeArea bgColor='blueGray.100'>
      <TouchableOpacity activeOpacity={1} onPress={gotoSearch}>
        <HStack style={styles.viewSearch} space={2}>
          <IconIonicons name='search' size={24} color='#000' />
          <Text style={styles.textLabel}>Tìm kiếm</Text>
        </HStack>
      </TouchableOpacity>
      <VStack flex={1} >
        <ScrollViewComponent>
          <HStack height={SCREEN_WIDTH / 2.5} alignItems='center' m={2}>
            <Swiper loop autoplay showsPagination={false}>
              <Image source={{ uri: data[0] }} style={styles.image} />
              <Image source={{ uri: data[1] }} style={styles.image} />
              <Image source={{ uri: data[2] }} style={styles.image} />
            </Swiper>
          </HStack>
          <RenderTabMenu />
          <FlatList
            data={lstData}
            renderItem={renderItem}
            keyExtractor={(item, index) => 'home' + index.toString()}
            scrollEnabled={false}
          />
        </ScrollViewComponent>
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
                  {typeList == 'Taobao' ? 'TAO' : typeList == '1688' ? '1688' : 'PIN'}</Text>
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
    </VStack>
  )
}

export default Home
