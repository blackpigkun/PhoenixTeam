import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
export default class ProductItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {

      data: { id,
        images,
        title,
        product_type,
        updated_at, },

      onClick,
    } = this.props;
    var _updated_at = moment(updated_at).format("DD/MM/YYYY HH:mm:ss");
    return (
      <TouchableOpacity style={styles.product} onPress={onClick} >
        <Image style={styles.productImgWrapper}
          source={{ uri: images[0].src }}
        />

        <View style={styles.productContentsWrapper}>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Mã:</Text>
            <Text style={styles.productText}> {id} </Text>
          </View>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Tên:</Text>
            <Text style={styles.productText}> {title} </Text>
          </View>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Loại:</Text>
            <Text style={styles.productText}> {product_type}</Text>
          </View>
          <View style={styles.productContentWrapper}>
            <Text style={styles.productContentTitle}>Ngày cập nhật:</Text>
            <Text style={styles.productText}> {_updated_at}</Text>
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
    borderColor: '#d7d7d7',
    borderBottomWidth: 1,
    alignItems: 'center',
    flex: 1,
  },
  productImgWrapper: {

    height: 80,
    width: 80,
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

