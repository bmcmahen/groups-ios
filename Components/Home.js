/**
 * @flow
 */

'use strict';

var React = require('react-native');
var ActionSheet = require('ActionSheetIOS');
var {
  StyleSheet,
  PixelRatio,
  Text,
  View,
  Component,
  Image,
  TouchableHighlight,
  PickerIOS,
  PickerItemIOS
} = React;

/**
 * Home (non-logged in)
 */

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      make: '1'
    }
  }

  render(){
    return (
      <View style={styles.home}>
        <Image source={{ uri: 'http://static.pexels.com/wp-content/uploads/2015/03/fog-forest-haze-4827.jpeg'}} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.headerColor}>Embler</Text>
          <Text style={styles.subheader}>The perfect tool for team communication</Text>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight underlayColor='rgba(0,0,0,0.1)' style={[styles.button ]} onPress={this.onRegister.bind(this)}>
            <Text style={{color: '#555555', fontWeight: '300', fontSize: 20, textAlign: 'center' }}>Register</Text>
          </TouchableHighlight>
          <View style={{backgroundColor: '#aaaaaa', height: 30, width: 1 }} />
          <TouchableHighlight underlayColor='rgba(0,0,0,0.1)' style={[styles.button]} onPress={this.onLogin.bind(this)}>
            <Text style={{color: '#555555', fontWeight: '300', fontSize: 20, textAlign: 'center'}}>Sign in</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  onRegister(){

  }

  onLogin(){
    this.props.navigator.push({
      id: 'login'
    });
  }

}

var styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  header: {
    fontSize: 25,
    color: '#4183c4',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 50,
    marginLeft: 30
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    backgroundColor: 'rgba(255,255,255,0.9)'
  },

  button: {
    padding: 10,
    height: 75,
    flex: 1,
    justifyContent: 'center',
    color: '#bbbbbb',
    borderColor: '#bbbbbb'
  },

  subheader: {
    color: '#999999',
    marginTop: 5,
    fontSize: 17,
    fontWeight: '200',
    width: 175
  },

  headerColor: {
    color: '#333333',
    fontSize: 40,
    fontWeight: '200'
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

module.exports = Home;