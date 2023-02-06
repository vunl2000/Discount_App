import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Header = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>Header</Text>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})