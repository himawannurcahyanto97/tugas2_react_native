import React, {Component} from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';

export default class Barang extends Component {

constructor(props) {
  super (props);
  this.state = {
    name : this.props.namabelanja,
    total : this.props.jumlah,
    inputan1: "",
    inputan2: ""
  }
}

tes1 =(events1)=>{
  this.setState({inputan1:events1});
}

tes2 =(events2)=>{
  this.setState({inputan2:events2});
}

render () {
    return (
    <View>

    <TextInput onChangeText={this.tes1}
    placeholder="Masukkan Nama Barang"
    value={this.state.Inputan1}/>

    <TextInput onChangeText={this.tes2}
    placeholder="Masukkan Jumlah"
    keyboardType="numeric"
    value={this.state.Inputan2}/>

    <Text> {this.state.name}</Text>

    <Text> Nama Barang : {this.state.inputan1}</Text>
    <Text> Jumlah Barang : {this.state.inputan2}</Text>
    </View>
    );
  }
}
