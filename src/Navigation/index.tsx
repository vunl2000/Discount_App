import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Person';
import Login from '../Screens/Account/SignIn';
import { SCREENS } from '../Constants/screens';
import { IS_IOS } from '../Constants/constants';
import colors from '../Style/colors';
import fontSizes from '../Style/fonts';
import { HStack, Pressable } from 'native-base';
import { IconFeather, IconIonicons } from '../Utils/IconHelper';
import ShareScreen from '../Screens/Share';
import PayScreen from '../Screens/Pay';
import DetailAccount from '../Screens/Account/Detail';
import ChangePass from '../Screens/Account/ChangePass';
import Withdraw from '../Screens/Pay/Withdraw';
import AddCard from '../Screens/Pay/AddCard';
import HistoryWithdraw from '../Screens/Pay/HistoryWithdraw';
import SearchProduct from '../Screens/Home/SearchProduct';
import RegistrationScreen from '../Screens/Account/SigUp/RegistrationScreen';

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
      <Native.Navigator initialRouteName={SCREENS.SIGN_IN} screenOptions={{ headerShown: false, }} >
        <Native.Screen name={SCREENS.SIGN_IN} component={Login} />
        <Native.Screen name={SCREENS.SIGN_UP} component={RegistrationScreen} />
        <Native.Screen name={SCREENS.BOTTOM_TAB} component={BottomTab} />
        <Native.Screen name={SCREENS.SHARE} component={ShareScreen} />
        <Native.Screen name={SCREENS.PAY} component={PayScreen} />
        <Native.Screen name={SCREENS.DETATIL_ACCOUNT} component={DetailAccount} />
        <Native.Screen name={SCREENS.CHANGE_PASS} component={ChangePass} />
        <Native.Screen name={SCREENS.LINK_CARD} component={Withdraw} />
        <Native.Screen name={SCREENS.ADD_CARD} component={AddCard} />
        <Native.Screen name={SCREENS.HISTORY_WITHDRAW} component={HistoryWithdraw} />
        <Native.Screen name={SCREENS.SEARCH_PRODUCT} component={SearchProduct} />
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