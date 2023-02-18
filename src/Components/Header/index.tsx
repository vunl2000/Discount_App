import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack } from 'native-base'
import styles from './styles'
import { IconFeather } from '../../Utils/IconHelper'
import { useNavigation } from '@react-navigation/native'
import colors from '../../Style/colors'

type Props = {
  title: string;
  type: 'close' | 'callback' | 'home' | undefined;
  callBack?: (() => void);
}

const Header = (props: Props) => {
  const naviagtion: any = useNavigation();
  const OnPress = () => {
    if ((props.type == 'callback' || props.type == 'close') && props.callBack != undefined) {
      props.callBack();
    }
    else {
      naviagtion.goBack();
    }
  }

  const RenderContent = () => {
    if (props.type == 'close') {
      return (
        <HStack style={{ justifyContent: 'space-between', height: 50, alignItems: 'center', backgroundColor: colors.red, padding: 10 }}>
          <TouchableOpacity onPress={() => OnPress()}>
            <IconFeather allowFontScaling={false} name="x" style={{ fontSize: 30, color: '#fff' }} />
          </TouchableOpacity>
          <Text allowFontScaling={false} style={{ color: '#fff', fontSize: 18 }}>{props.title}</Text>
          <IconFeather allowFontScaling={false} name="x" style={{ fontSize: 30, color: colors.red }} />
        </HStack>
      );
    }
    if (props.type == undefined || props.type == 'callback') {
      return (
        <HStack style={{ justifyContent: 'space-between', height: 50, alignItems: 'center', backgroundColor: colors.red, padding: 10 }}>
          <TouchableOpacity onPress={() => OnPress()}>
            <IconFeather allowFontScaling={false} name="chevron-left" style={{ fontSize: 30, color: '#fff' }} />
          </TouchableOpacity>
          <Text allowFontScaling={false} style={{ color: '#fff', fontSize: 18 }}>{props.title}</Text>
          <IconFeather allowFontScaling={false} name="chevron-left" style={{ fontSize: 30, color: colors.red }} />
        </HStack>
      )
    }
    return (
      <IconFeather name="chevron-left" style={{ fontSize: 30, color: colors.red }} />
    )
  }

  return (
    <SafeAreaView edges={['top', 'right', 'left']}>
      <StatusBar backgroundColor={colors.red} barStyle='light-content' />
      <RenderContent />
    </SafeAreaView>
  )
}

export default Header
