import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProductItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      data,
      onClick,
    } = this.props;
    return (
      <TouchableOpacity style={styles.product} onPress={onClick}>
        <View style={styles.productImgWrapper}>

        </View>
        <View style={styles.productContentsWrapper}>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Mã:</Text>
            <Text style={styles.productText}> SP000 </Text>
          </View>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Tên:</Text>
            <Text style={styles.productText}> Quần xì chấm bi </Text>
          </View>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Số lượng tồn:</Text>
            <Text style={styles.productText}> 1000 </Text>
          </View>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Ngày cập nhật:</Text>
            <Text style={styles.productText}> 16/09/2000 </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

  product: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    borderColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    flex: 1,
  },
  productImgWrapper: {

    backgroundColor: '#3385ff',
    height:80,
    width:80,
    borderRadius: 40,
  },

  productContentsWrapper: {
    flexDirection: 'column',
    flex: 0.8
  },
  productContentWrapper: {
    flexDirection: 'row',

    justifyContent: 'flex-start'
  },

  productContentTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },
  productContentText: {
    color: 'black',
    fontSize: 18,
  },
});

