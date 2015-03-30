/**
 * Groups IOS App
 * @flow
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Component,
  TouchableHighlight,
  Text,
  View
} = React;


/**
 * Stores
 */

var GroupStore = require('./Stores/GroupStore');

/**
 * Components
 */

var Navigation = require('./Components/Navigation');
var Login = require('./Components/Login');
var Home = require('./Components/Home');

function getAppState(){
  return {
    groups: GroupStore.toJSON()
  }
}

/**
 * App Store
 */

class GroupsIOS extends Component {

  constructor(props) {
    super(props);
    this.state = { showLogin: false };
  }

  updateStores(){
    this.setState(getAppState());
  }

  componentWillMount(){
    this.updateStores();
    GroupStore.on('change', this.updateStores);
  }

  renderScene(route, nav) {
    console.log(route, nav);
    switch(route.id) {
      case 'login':
        return <Login navigator={nav} {...route.passProps} />;
      default:
        return <Home navigator={nav} />
    }
  }

  render(){
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: 'First Page', index: 0 }}
        renderScene={this.renderScene.bind(this)}
        configureScene={this.configureScene.bind(this)}
      />
    );
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromBottom;
  }


}


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

AppRegistry.registerComponent('groups_ios', () => GroupsIOS);
