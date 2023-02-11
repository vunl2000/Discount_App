import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../BaseScreen'
import { FormControl, Input, VStack, WarningOutlineIcon, Pressable, Icon, Button, } from 'native-base'
import { IconIonicons, IconMaterialCommunityIcons } from '../../../Utils/IconHelper'
import styles from './styles'

type Props = {}

const ChangePass: React.FC<Props> = (props) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <BaseScreen title='Đổi mật khẩu'>
      <VStack flex={1} space={4} pt={4} bgColor='blueGray.100'>
        <FormControl isRequired>
          <VStack mx="4">
            <FormControl.Label>Mật khẩu cũ </FormControl.Label>
            <Input _light={{
              bg: "blueGray.100",
              _hover: {
                bg: "blueGray.200"
              },
              _focus: {
                bg: "blueGray.200:alpha.70"
              }
            }} _dark={{
              bg: "coolGray.800",
              _hover: {
                bg: "coolGray.900"
              },
              _focus: {
                bg: "coolGray.900:alpha.70"
              }
            }}
              bgColor='blueGray.100'
              shadow={2}
              type={showPass ? "text" : "password"}
              placeholder="Nhập mật khẩu cũ"
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon as={<IconIonicons name={showPass ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>}
            />
            <FormControl.HelperText>
              Nhập tối thiểu 6 ký tự.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Nhập tối thiểu 6 ký tự.
            </FormControl.ErrorMessage>
          </VStack>
        </FormControl>

        <FormControl isRequired>
          <VStack mx="4">
            <FormControl.Label>Mật khẩu mới </FormControl.Label>
            <Input _light={{
              bg: "blueGray.100",
              _hover: {
                bg: "blueGray.200"
              },
              _focus: {
                bg: "blueGray.200:alpha.70"
              }
            }} _dark={{
              bg: "coolGray.800",
              _hover: {
                bg: "coolGray.900"
              },
              _focus: {
                bg: "coolGray.900:alpha.70"
              }
            }}
              shadow={1}
              type={showPass ? "text" : "password"}
              placeholder="Mật khẩu mới"
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon as={<IconIonicons name={showPass ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>}
            />
            <FormControl.HelperText>
              Nhập tối thiểu 6 ký tự.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Nhập tối thiểu 6 ký tự.
            </FormControl.ErrorMessage>
          </VStack>
        </FormControl>

        <FormControl isRequired>
          <VStack mx="4">
            <FormControl.Label>Nhập lại mật khẩu mới </FormControl.Label>
            <Input _light={{
              bg: "blueGray.100",
              _hover: {
                bg: "blueGray.200"
              },
              _focus: {
                bg: "blueGray.200:alpha.70"
              }
            }} _dark={{
              bg: "coolGray.800",
              _hover: {
                bg: "coolGray.900"
              },
              _focus: {
                bg: "coolGray.900:alpha.70"
              }
            }}
              shadow={1}
              type={showPass ? "text" : "password"}
              placeholder="Nhập lại mật khẩu mới"
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon as={<IconIonicons name={showPass ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>}
            />
            <FormControl.HelperText>
              Nhập tối thiểu 6 ký tự.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Nhập tối thiểu 6 ký tự.
            </FormControl.ErrorMessage>
          </VStack>
        </FormControl>

        <Button colorScheme='info' mx={4}>
          <Text style={styles.textBtn}>Đổi mật khẩu</Text>
        </Button>
      </VStack>
    </BaseScreen >
  )
}

export default ChangePass
