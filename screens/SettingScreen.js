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
import SettingItem from '../components/SettingItem'
export default class SettingScreen extends Component {
  render() {
    var settings = []
    for (let i = 0; i < 5; i++) {

      settings.push(
        <SettingItem />
      )
    }
    return (
      <View style={styles.container}>

        <View style={styles.headTitle}>
          <Text style={styles.headTitleText}>Qty</Text>
          <Text style={styles.headTitleText}>Discount (%)</Text>
          <Text style={styles.headTitleText}>Date</Text>
          <Text style={styles.headTitleText}>Date Update</Text>
        </View>

        <ScrollView>
          {settings}
          <View style={styles.moreButtonWrapper} >
            <TouchableOpacity style={styles.moreButton}>
              <Text>More</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>

    )
  }
};

SettingScreen.navigationOptions = {
  title: 'Cài đặt điều kiện đặt giá động',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
  headTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d9d9d9'
  },

  headTitleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  },

  moreButtonWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  moreButton: {
    height: 30,
    width: 60,
    marginTop:10,
    marginRight:10,
    borderRadius: 13,
    backgroundColor: '#66c2ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pagingButtonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '200',
  },
});
