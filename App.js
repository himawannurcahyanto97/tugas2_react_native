/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Barang from "./Component/Barang";

export default class App extends Component {
  render () {
    return (
      <View>
      <StatusBar backgroundColor = "pink" />
      <Text> TUGAS 2 REACT NATIVE </Text>
      <Barang namabelanja="================= Total Belanja =================="/>
      </View>
      )
  }
}
