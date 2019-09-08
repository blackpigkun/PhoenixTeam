import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default class HistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        const {onClick} = this.props;
        return (

            <TouchableOpacity style={styles.history} onPress={onClick} >
                <View style={styles.imgWrapper}>
                    <Text> Img </Text>
                </View>
                <View style={styles.contentWrapper}>
                    <Text style={styles.contentTitle}> Update on product "SP001"! </Text>
                    <Text style={styles.contentLastUpdate}> 1/1/1998 16:09</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({

    history: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        alignItems:'center',
        paddingHorizontal: 5,
        flex:1,
    },

    imgWrapper: {
        backgroundColor:'#3385ff',
        height:70,
        width:70,
        borderRadius:35,
        alignItems:'center',
    },

    contentWrapper: {
        flexDirection: 'column',
        flex: 0.8,
        paddingLeft: 10,
    },
    contentTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
    },
    contentLastUpdate: {
        color: '#8c8c8c',
        fontSize: 14,
        fontWeight: '200'
    },
});