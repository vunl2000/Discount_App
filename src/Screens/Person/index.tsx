import { GestureResponderEvent, StyleSheet, Text } from 'react-native'
import React from 'react'
import { FlatList, HStack, VStack, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import StringHelper from '../../Utils/StringHelper'
import { IconIonicons, IconOcticons } from '../../Utils/IconHelper'
import styles from './styles'

type Props = {}

type MenuController = {
  title: string;
  icon: string;
  userName?: string;
  email?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const lstMenu = [
    {
      userName: 'Admin',
      email: 'admin1234@gmail.com',
      onPress: () => { console.log('Admin') },
      icon: 'person'
    },
    {
      title: 'Ví tiền',
      onPress: () => { console.log('Money') },
      icon: 'ios-server'
    },
    {
      title: 'Giới thiệu',
      onPress: () => { console.log('Detail') },
      icon: 'person-add'
    },
    {
      title: 'Hướng dẫn',
      onPress: () => { console.log('Support') },
      icon: 'information-circle'
    },
    {
      title: 'Liên hệ',
      onPress: () => { console.log('Contacts') },
      icon: 'call'
    },
    {
      title: 'Đăng xuất',
      onPress: () => { console.log('LogOut') },
      icon: 'arrow-forward-outline'
    },
  ] as MenuController[]
  const renderMenu = ({ item, index }: { item: MenuController, index: number }) => {
    return (
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
    );
  }
  return (
    <VStack flex={1} safeArea bgColor='blueGray.100' py={5}>
      <FlatList
        data={lstMenu}
        renderItem={renderMenu}
        keyExtractor={(item, index) => 'menu' + index.toString()}
        ItemSeparatorComponent={() => (<View h={4} w='100%' />)}
      />
    </VStack>
  )
}

export default Profile