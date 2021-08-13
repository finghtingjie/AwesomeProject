import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, StyleSheet, View, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class Index extends React.PureComponent {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const user = await AsyncStorage.getItem('user');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if (user) {
      this.props.setUser(user);
    }

    this.props.navigation.navigate(user ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
        <Text>loading...</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => {
      dispatch({ type: 'SET_USER', user: user });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
