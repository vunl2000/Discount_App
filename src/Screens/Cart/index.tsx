import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { HStack, Input, Skeleton, VStack } from 'native-base'
import { IconIonicons } from '../../Utils/IconHelper'
import {
  TabView,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view'
import styles from './styles'
import Modal from 'react-native-modalbox'
import { SafeAreaView } from 'react-native-safe-area-context'
import StringHelper from '../../Utils/StringHelper'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Constants/constants'

type Props = {
}

type Route = {
  key: string;
  title: string;
  icon?: React.ComponentProps<typeof IconIonicons>['name'];
};

const imgEmpty = require('../../Accsets/image/Empty.png');

type State = NavigationState<Route>;

const actionColorTabbar = (isActive: boolean): ViewStyle => {
  return ({
    backgroundColor: isActive ? '#fff' : 'transparent',
    height: isActive ? 40 : 50,
    borderRadius: 10
  })
}

const Cart = (props: Props) => {
  const [loading, onLoadingChange] = React.useState(false);
  const [index, onIndexChange] = React.useState(0);
  const [keySearch, setKeySearch] = React.useState('');
  const [keySearchTemp, setKeySearchTemp] = React.useState('');
  const ref_modal = React.useRef<Modal>(null);
  const [routes] = React.useState<Route[]>([
    { key: 'all', title: 'Tất cả' },
    { key: 'pending', title: 'Giao dịch' },
    { key: 'succes', title: 'Thành công' },
  ]);
  //setup page
  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <HStack style={{ ...styles.shadown, ...styles.viewContainTabs }} space={1}>
      {props.navigationState.routes.map((route: Route, i: number) => {
        let actived = index === i;
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={`tabCart${i}`}
            style={{ ...styles.tab, ...actionColorTabbar(actived) }}
            onPress={() => {
              props.jumpTo(route.key);
              onIndexChange(i);
            }}>
            <Text style={styles.textTab} > {route.title}</Text>
          </TouchableOpacity>)
      })
      }
    </HStack >
  )

  React.useEffect(() => {
    onLoadingChange(true);
    const loader = setTimeout(() => {
      onLoadingChange(false);
    }, 2000);

    return () => clearTimeout(loader)
  }, [index])

  //render page
  const EmptyData = () => (
    <VStack mt={120} alignItems='center' justifyContent='center' space={4}>
      <Image source={imgEmpty} resizeMode='cover' style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8, alignSelf: 'center' }} />
      <Text style={styles.textEmpty}>Không có đơn hàng nào.</Text>
    </VStack>
  )
  const Contacts = () => (
    <VStack flex={1} justifyItems='center' alignItems='center'>
      {loading && <Skeleton flex={1} />}
      {!loading && <EmptyData />}
    </VStack>)
  const Albums = () => (
    <VStack flex={1} justifyItems='center' alignItems='center'>
      {loading && <Skeleton flex={1} />}
      {!loading && <EmptyData />}
    </VStack>)
  const Article = () => (
    <VStack flex={1} justifyItems='center' alignItems='center'>
      {loading && <Skeleton flex={1} />}
      {!loading && <EmptyData />}
    </VStack>)

  const SearchScreens = () => (
    <VStack flex={1} justifyItems='center' alignItems='center'>
      {loading && <Skeleton flex={1} />}
      {!loading && <EmptyData />}
    </VStack>)

  const renderScene = SceneMap({
    all: Contacts,
    pending: Albums,
    succes: Article,
  });

  const openSearchBox = () => {
    ref_modal.current?.open();
  }
  const closeSearchBox = () => {
    ref_modal.current?.close();
  }

  return (
    <VStack safeArea flex={1} bgColor='#fff'>
      <VStack py={4}>
        <Text style={styles.textTitle}>Đơn hàng</Text>

        <TouchableOpacity activeOpacity={1} onPress={openSearchBox}>
          <HStack style={{ ...styles.viewSearch, ...styles.shadown, alignItems: 'center' }} space={1}>
            <IconIonicons name='search' size={24} color='#000' />
            {!StringHelper.IsEmpty(keySearch) && <Text style={{ flex: 1, color: '#000' }}>{keySearch}</Text>}
          </HStack>
        </TouchableOpacity>
      </VStack>

      <VStack flex={1}>
        {StringHelper.IsEmpty(keySearch) && <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={onIndexChange}
        />}

        {!StringHelper.IsEmpty(keySearch) && <SearchScreens />}
      </VStack>
      <Modal
        ref={ref_modal}
        coverScreen
        swipeToClose
        backButtonClose
        style={{ flex: 1 }}
      >
        <VStack flex={1} >
          <SafeAreaView>
            <HStack>
              <TouchableOpacity style={styles.viewIcon} onPress={closeSearchBox}>
                <IconIonicons name='ios-chevron-back' size={24} color='#000' />
              </TouchableOpacity>
              <HStack flex={1} style={{ ...styles.viewSearch, ...styles.shadown, padding: 0 }}>
                <Input
                  value={keySearch}
                  variant='unstyled'
                  onChangeText={(val: string) => setKeySearch(val)}
                  flex={1}
                  fontSize={14}
                  color='#000'
                />
              </HStack>
              <TouchableOpacity style={styles.viewIcon} onPress={closeSearchBox}>
                <IconIonicons name='search' size={24} color='#000' />
              </TouchableOpacity>
            </HStack>
          </SafeAreaView>
        </VStack>
      </Modal>
    </VStack>
  )
}

export default Cart;