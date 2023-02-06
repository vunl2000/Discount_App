import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Person';
import Login from '../Screens/SignIn';
import { SCREENS } from '../Constants/screens';
import { IS_IOS } from '../Constants/constants';
import colors from '../Style/colors';
import fontSizes from '../Style/fonts';
import { HStack, Pressable } from 'native-base';
import { IconFeather, IconIonicons } from '../Utils/IconHelper';

const iconTabs = [{ active: '', unactive: '' }]


const Native = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const listTabBar = [
  {
    iconName: "home",
    label: "Trang chủ",
    navigateTo: SCREENS.HOME
  },
  {
    iconName: "cart",
    label: "Đơn hàng",
    navigateTo: SCREENS.CART
  },
  {
    iconName: "person",
    label: "Tài khoản",
    navigateTo: SCREENS.SETTING
  }
]

function FooterTabs(props: any) {
  const indexTab = props.state.index;
  const navigation = props.navigation;

  function OnPressItem(navigationTo: string) {
    navigation.navigate(navigationTo);
  }

  return (
    <HStack alignItems='center' safeAreaBottom
      style={styles.tabView}>
      {listTabBar.map((item, index) => (
        <Pressable
          key={index}
          style={styles.button}
          onPress={() => OnPressItem(item.navigateTo)}>
          {index == indexTab &&
            <>
              <IconIonicons name={item.iconName} style={styles.iconActive} />
              <Text style={styles.txtLabelActive}>{item.label}</Text>
            </>
          }
          {index !== indexTab &&
            <>
              <IconIonicons name={item.iconName} style={styles.iconInActive} />
              <Text style={styles.txtLabelInActive}>{item.label}</Text>
            </>
          }
        </Pressable>
      ))
      }
    </HStack >
  )
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      tabBar={props => <FooterTabs{...props} />}
      screenOptions={{
        headerShown: false,
        lazy: true
      }}
      initialRouteName={SCREENS.HOME}
    >
      <Tab.Screen name={SCREENS.HOME}
        component={Home} />
      <Tab.Screen name={SCREENS.CART}
        component={Cart} />
      <Tab.Screen name={SCREENS.SETTING}
        component={Profile} />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Native.Navigator initialRouteName={SCREENS.BOTTOM_TAB} screenOptions={{ headerShown: false, }} >
        <Native.Screen name={SCREENS.SIGN_IN} component={Login} />
        <Native.Screen name={SCREENS.BOTTOM_TAB} component={BottomTab} />
      </Native.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;

const styles = StyleSheet.create({
  tabView: {
    paddingVertical: 12,
    backgroundColor: '#fff'
  },
  iconActive: {
    fontSize: 24,
    color: '#000'
  },
  iconInActive: {
    fontSize: 22,
    color: '#ccc'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtLabelInActive: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333'
  },
  txtLabelActive: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  }
})