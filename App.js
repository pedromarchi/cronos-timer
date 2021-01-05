import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Text, TouchableOpacity } from 'react-native';

export default class Cronometro extends Component{
  constructor(props){
    super(props);
    this.state = {n:0, botao: 'GO'};
    this.timer = null;

    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
  }
  go() {
    let s = this.state;
    if (this.timer != null) {
        clearInterval(this.timer);
        this.timer = null;
        s.botao = 'GO';
    } else {
        this.timer = setInterval(()=>{
          let s = this.state;
          s.n += 0.1;
          this.setState(s);
        }, 100);
        s.botao = 'PAUSE';
      }
      this.setState(s);
  }
  reset() {
    if (this.timer != null) {
        clearInterval(this.timer);
        this.timer = null;
    }

    let s = this.state;
    s.n = 0;
    this.setState(s);
  }
  render(){
    return(
      <View style={styles.body}>
        <StatusBar barStyle='light-content' backgroundColor='black' hidden={false}/>
        <Image source={require('./images/relogio.png')}/>
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.go}>
            <Text style={styles.botaoTxt}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.reset}>
            <Text style={styles.botaoTxt}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    color: '#BAA07A',
    fontSize: 80,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  botaoArea: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 40,
    backgroundColor: '#BAA07A',
    borderRadius: 5,
    margin: 1
  },
  botaoTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  }
});