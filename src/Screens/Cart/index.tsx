import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { HStack, Skeleton, VStack } from 'native-base'
import { IconIonicons } from '../../Utils/IconHelper'
import {
  TabView,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view'
import styles from './styles'

type Props = {
}

type Route = {
  key: string;
  title: string;
  icon?: React.ComponentProps<typeof IconIonicons>['name'];
};

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
    <HStack mt={120}>
      <Text style={styles.textEmpty}>[Không có dữ liệu.]</Text>
    </HStack>
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

  const renderScene = SceneMap({
    all: Contacts,
    pending: Albums,
    succes: Article,
  });

  return (
    <VStack safeArea flex={1} bgColor='#fff'>
      <VStack py={4}>
        <Text style={styles.textTitle}>Đơn hàng</Text>

        <HStack style={{ ...styles.viewSearch, ...styles.shadown }}>
          <IconIonicons name='search' style={styles.iconSearch} />
        </HStack>
      </VStack>

      <VStack flex={1}>
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={onIndexChange}
        />
      </VStack>
    </VStack>
  )
}

export default Cart;