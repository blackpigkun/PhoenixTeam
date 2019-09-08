import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HistoryItem from '../components/HistoryItem';
export default class HistoryScreen extends Component {
  
  onClickHistory = id => {
    this.props.navigation.navigate('ItemDetail', {});
  };
  render() {
    var history = [];

    for (let i = 0; i < 10; i++) {

      history.push(
        <HistoryItem onClick={()=> this.onClickHistory()}/>
      )
    }
    return (
      <ScrollView style={styles.container}>
        {history}
      </ScrollView>
    )

  };

}

HistoryScreen.navigationOptions = {
  title: 'Lịch sử',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
