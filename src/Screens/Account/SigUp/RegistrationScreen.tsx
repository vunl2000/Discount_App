import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import colors from '../../../Style/colors';
import Loader from '../../../loader/Loader';
import Input from '../../../Components/input/Input';
import Button from '../../../Components/Button/Button';
import { SCREENS } from '../../../Constants/screens';


const RegistrationScreen = ({ navigation }: any) => {
  const [inputs, setInputs] = React.useState<any>({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState<any>(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Vui lòng nhập email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Email không đúng định dạng', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Vui lòng nhập họ tên', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Vui lòng nhập số điện thoại', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Vui lòng nhập mật khẩu', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Mật khẩu phải lớn hơn 5 ký tự', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {

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
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
      />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: colors.black, fontSize: 40, fontWeight: 'bold' }}>
          Đăng ký
        </Text>
        <Text style={{ color: colors.grey, fontSize: 18, marginVertical: 10 }}>
          Nhập thông tin chi tiết của bạn để đăng ký
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
            onChangeText={(text: any) => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Họ tên"
            placeholder="Nhập họ tên"
            error={errors.fullname}
          />
          <Input
            keyboardType="numeric"
            onChangeText={(text: any) => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            error={errors.phone}
          />
          <Input
            onChangeText={(text: any) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            error={errors.password}
            password
          />
          <Button title="Đăng ký" onPress={validate} />
          <Text
            onPress={() => navigation.navigate(SCREENS.SIGN_IN as never)}
            style={{
              color: colors.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Bạn đã có tài khoản ?Đăng nhập
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;