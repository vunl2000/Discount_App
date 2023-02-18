import React from 'react';
import { View, Text, SafeAreaView, Keyboard, Alert } from 'react-native';
import colors from '../../../Style/colors';
import Loader from '../../../loader/Loader';
import Input from '../../../Components/input/Input';
import Button from '../../../Components/Button/Button';
import { SCREENS } from '../../../Constants/screens';
import { useNavigation } from '@react-navigation/native';
type Props = {}

const SignIn = (props: Props) => {
  const [inputs, setInputs] = React.useState<any>({ email: '', password: '' });
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState<any>(false);
  const navigation = useNavigation();


  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Vui lòng nhập email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Vui lòng nhập password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    // navigation.navigate(SCREENS.BOTTOM_TAB as never)
    // setTimeout(async () => {
    //   setLoading(false);
    //   // let userData = await AsyncStorage.getItem('userData');
    //   if (userData) {
    //     userData = JSON.parse(userData);
    //     if (
    //       inputs.email == userData.email &&
    //       inputs.password == userData.password
    //     ) {
    //       navigation.navigate('HomeScreen');
    //       // AsyncStorage.setItem(
    //       //   'userData',
    //       //   JSON.stringify({...userData, loggedIn: true}),
    //       // );
    //     } else {
    //       Alert.alert('Error', 'Invalid Details');
    //     }
    //   } else {
    //     Alert.alert('Error', 'User does not exist');
    //   }
    // }, 3000);
  };

  const handleOnchange = (text: any, input: any) => {
    setInputs((prevState: any) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error: any, input: any) => {
    setErrors((prevState: any) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      {/* <Loader visible={loading} /> */}
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: colors.black, fontSize: 40, fontWeight: 'bold' }}>
          Đăng nhập
        </Text>
        <Text style={{ color: colors.grey, fontSize: 18, marginVertical: 10 }}>
          Nhập thông tin chi tiết của bạn để đăng nhập
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text: any) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Nhập địa chỉ email"
            error={errors.email}
          />
          <Input
            onChangeText={(text: any) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Nhập địa mật khẩu"
            error={errors.password}
            password
          />
          <Button title="Đăng nhập" onPress={validate} />
          <Text
            onPress={() => navigation.navigate(SCREENS.SIGN_UP as never)}
            style={{
              color: colors.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Bạn chưa có tài khoản? Đăng ký
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn;