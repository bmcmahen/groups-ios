/**
 * @flow
 */

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  PixelRatio,
  Text,
  View,
  ActivityIndicatorIOS,
  TouchableHighlight,
  Component,
  ScrollView
} = React;



/**
 * Navigation Component
 */

class Navigation extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderContent()}
      </ScrollView>
    )
  }

  renderContent(){
    return (
      <View>
        <Text style={styles.text}>{this.props.groups.foo}</Text>
      </View>
    );
  }
}

var styles = {

  contentContainer: {
    padding: 10
  },

  scrollView: {
    paddingTop: 80,
    height: 300,
    backgroundColor: '#f7f7f7'
  },

  text: {
    paddingTop: 150,
    color: '#aaaaaa'
  }

};


/**
 * Expose Navigation
 */

module.exports = Navigation;