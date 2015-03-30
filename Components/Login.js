/**
 * Login Form
 * @flow
 */

'use strict';

var React = require('react-native');
var { 
  StyleSheet,
  Component,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Animation,
  TextInputState,
  LayoutAnimation
} = React;

/**
 * Login Panel
 */

class Login extends Component {

  contructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.overlay}>
        <View style={styles.nav}>
          <View style={styles.left}>
            <TouchableHighlight style={{flex: 0}} underlayColor='rgba(0,0,0,0.1)' onPress={this.onClose.bind(this)}>
              <Text style={{color: '#008ACF'}}>Cancel</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.title}>Embler Login</Text>
          <View style={styles.right} />
        </View>
        <View>
          <View style={styles.divider} />
          <TextInput
            autoCapitalize="none"
            clearButtonMode='while-editing'
            placeholder="Username, or email address"
            autoCorrect={false}
            style={styles.default}
            onChange={this.onUsername.bind(this)}
          />
          <View style={styles.divider} />
          <TextInput
            autoCorrect={false}
            style={styles.default}
            autoCapitalize='none'
            placeholder='Password'
            secureTextEntry={true}
            onChange={this.onPassword.bind(this)}
          />
          <View style={styles.divider} />
          <View style={{padding: 15 }}>
            <TouchableHighlight
              style={styles.button}
              onPress={this.onSubmit.bind(this)}>
                <View>
                  <Text style={styles.buttonText}>
                    Sign in
                  </Text>
                </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  onClose(){
    this.props.navigator.pop();
  }

  onUsername(e){
    this.setState({ username: e.nativeEvent.text });
  }

  onPassword(e){
    this.setState({ password: e.nativeEvent.text });
  }

  onSubmit(){
    console.log('attempt login', this.state);
    this.attemptLogin(this.state.username, this.state.password);
  }

  attemptLogin(username: string, password: string) {
    fetch('http://localhost:8000/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => {
      console.log('got response', res);
      return res.json();
    })
    .then(json => {
      console.log('got json as response %o', json);
    })
    .catch(err => {
      console.log('error loading json %j', err);
    })
    .done();
  }
}

var styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  nav: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    paddingBottom: 20,
    paddingTop: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flexDirection: 'row',
    shadowRadius: 2,
    shadowColor: '#000000',
    alignItems: 'flex-end'
  },

  left: {
    flex: 0
  },

  right: {
    width: 50,
    flex: 0
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500'
  },

  page: {
    paddingBottom: 300,
  },
  default: {
    height: 45,
    flex: 1,
    padding: 15,
    fontSize: 15,
    backgroundColor: '#ffffff'
  },
  multiline: {
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    height: 50,
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  label: {

    marginLeft: 15,
    padding: 5,
    fontSize: 12,
    color: '#666666'
  },
  button: {
    padding: 12,
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#008ACF',
    backgroundColor: '#008ACF',
    borderRadius: 5
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd'
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center'
  },

  header: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 10,
    marginLeft: 15
  }
});

var animations = {
  layout: {
    spring: {
      duration: 0.75,
      create: {
        duration: 0.3,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
      },
    },
    easeInEaseOut: {
      duration: 0.3,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        delay: 0.1,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

module.exports = Login;