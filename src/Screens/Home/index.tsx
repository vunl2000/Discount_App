import { Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { HStack, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { IconEntypo, IconIonicons } from '../../Utils/IconHelper';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { SCREEN_WIDTH } from '../../Constants/constants';
import ScrollViewComponent from '../../Components/ScrollView';
type Props = {}

const url = 'https://chietkhau1688.vn/flutter/random?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk0MCwiZW1haWwiOiJmZHNhZmRzYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRvaXNsIiwidGltZSI6IjIwMjMtMDItMDIgMDE6MDk6MTIifQ.sVy_Epv_cvqU0IF9k6e0or3kaaWFVYwSn05wv-HQj64&web=1&platform=2';

const data = [
  'https://tcorder.vn/wp-content/uploads/2020/08/san-hang-sale-trung-quoc.jpg',
  'https://config.meoconbanhang.com/upload-image/4seller-banner-hdsd.png',
  'https://tieuthantai.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/08/11020627/unnamed-1.jpg'
]
const tab = ['Taobao', '1688', 'Pinduoduo']
type TypeLst = 'taobao' | '1688' | 'pin'
const Home: React.FC<Props> = () => {
  const [lstData, setlstData] = useState<any[]>([])
  const [typeList, setTypeList] = useState<TypeLst>('taobao');

  const getData = () => {
    fetch(url, { method: 'GET' }).
      then(rs => rs.json()).
      then(value => {
        if (value.code == 'SUCCESS')
          setlstData(value.data);
      }).catch(err => { })
  }

  const onChangeTab = (type: string) => {
    setTypeList(type as TypeLst);
    getData();
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

  const renderItem = ({ item }: any) => (
    <HStack style={styles.viewItem} space={2}>
      <Image source={{ uri: item.img }} style={styles.imageItem} resizeMode='cover' />

      <VStack flex={1}>
        <VStack flex={1} >
          <View>
            <Text style={styles.textValue} numberOfLines={1} ellipsizeMode='tail'><Text style={{ color: '#f43f5e', fontWeight: 'bold' }}>{typeList == 'taobao' ? 'TAO' : typeList == '1688' ? '1688' : 'PIN'}</Text> {item.name}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>Chiết khấu: ￥{item.rate}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>Giá thành: ￥{item.price}</Text>
          </View>
        </VStack>
        <HStack space={2}>
          <TouchableOpacity style={{ flex: 1 }}>
            <HStack style={styles.btnLink}>
              <Text style={{ color: '#06b6d4' }}>Lấy liên kết</Text>
            </HStack>
          </TouchableOpacity>

          <TouchableOpacity>
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
      <HStack style={styles.viewSearch} space={2}>
        <IconIonicons name='search' style={styles.iconSearch} />
        <Text style={styles.textLabel}>Tìm kiếm</Text>
      </HStack>
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
    </VStack>
  )
}

export default Home
