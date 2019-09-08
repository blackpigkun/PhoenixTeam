import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={styles.setting}>
                <Text style={styles.settingText}> --- </Text>
                <Text style={styles.settingText}> --- </Text>
                <Text style={styles.settingText}> --- </Text>
                <Text style={styles.settingText}> ---to--- </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
    setting: {
      flexDirection:'row',
      justifyContent: 'space-around',
      height:50,
      borderColor:'black',
      borderWidth:1,
      marginTop:5,
    },
  
    settingText: {
      color:'black',
      fontSize:28,
      fontWeight:'400'
    },
  });
  
