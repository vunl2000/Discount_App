import { GestureResponderEvent, StyleSheet, Text, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList, HStack, VStack, View, useToast } from 'native-base'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import StringHelper from '../../Utils/StringHelper'
import { IconIonicons, IconOcticons } from '../../Utils/IconHelper'
import styles from './styles'
import { SCREEN_WIDTH } from '../../Constants/constants'
import { SCREENS } from '../../Constants/screens'

type Props = {}

type MenuController = {
  title: string;
  icon: string;
  userName?: string;
  email?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const URL_SUPPORT = 'https://chietkhau1688.vn/category/1/H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn'

const Space = () => (
  <View h={4} w='100%' />
)

const Profile: React.FC<Props> = (props) => {

  const navigation: any = useNavigation();
  const toast = useToast();
  const callPhone = async () => {
    await Linking.openURL('tel:0984002900')
  }

  const onpenSupport = async () => {
    await Linking.openURL(URL_SUPPORT)
  }

  const logOut = () => {
    toast.show({
      title: "Đang phát triển",
      placement: "top",
      duration: 2000,
      bgColor: 'blue.400',
      width: SCREEN_WIDTH * 0.6,
      justifyContent: 'center',
      alignItems: 'center'
    })
  }

  const lstMenu = [
    {
      userName: 'Admin',
      email: 'admin1234@gmail.com',
      onPress: () => navigation.navigate(SCREENS.DETATIL_ACCOUNT),
      icon: 'person'
    },
    {
      title: 'Ví tiền',
      onPress: () => navigation.navigate(SCREENS.PAY),
      icon: 'ios-server'
    },
    {
      title: 'Giới thiệu',
      onPress: () => navigation.navigate(SCREENS.SHARE),
      icon: 'person-add'
    },
    {
      title: 'Hướng dẫn',
      onPress: onpenSupport,
      icon: 'information-circle'
    },
    {
      title: 'Liên hệ',
      onPress: callPhone,
      icon: 'call'
    },
    {
      title: 'Đăng xuất',
      onPress: logOut,
      icon: 'arrow-forward-outline'
    },
  ] as MenuController[]

  const renderMenu = ({ item, index }: { item: MenuController, index: number }) => {
    return (
      <TouchableOpacity onPress={item.onPress} activeOpacity={1}>
        <HStack p={4} borderRadius={10} style={styles.shadown}>
          <HStack w='14%' alignItems='center'>
            <IconIonicons name={item.icon} style={index === 0 ? styles.iconUser : styles.iconValue} />
          </HStack>
          <VStack flex={1} justifyContent='center'>
            {!StringHelper.IsEmpty(item.userName) &&
              <Text>{item.userName}</Text>}
            {!StringHelper.IsEmpty(item.email) &&
              <Text>{item.email}</Text>}
            {!StringHelper.IsEmpty(item.title) &&
              <Text>{item.title}</Text>}
          </VStack>
          <View alignSelf='center'>
            <IconIonicons name='chevron-forward-outline' size={20} color='#000' />
          </View>
        </HStack>
      </TouchableOpacity>
    );
  }
  return (
    <VStack flex={1} safeArea bgColor='blueGray.100' py={5}>
      <FlatList
        data={lstMenu}
        renderItem={renderMenu}
        keyExtractor={(item, index) => 'menu' + index.toString()}
        ItemSeparatorComponent={Space}
        ListFooterComponent={Space}
      />
    </VStack>
  )
}

export default Profile