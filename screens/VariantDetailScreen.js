import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Script
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar, ButtonGroup, Input, Button, } from 'react-native-elements';
import moment from 'moment';
var data = {


  id: 4,
  date: 30
}

export default class VariantDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      variantItem: {
        sku: '',
        updated_at: '',
        price: '',
        inventory_quantity: '',
        image_id: '',
        last_sell: '',
        discount: '',
        duration: '',
      },
      images: [],
    };
  }
  componentWillMount = () => {
    const { navigation } = this.props;
    const VariantItem = navigation.getParam('data');
    this.setState({
      variantItem: {
        sku: VariantItem.variantsItem.sku,
        updated_at: VariantItem.variantsItem.updated_at,
        price: VariantItem.variantsItem.price,
        inventory_quantity: VariantItem.variantsItem.inventory_quantity,
        image_id: VariantItem.variantsItem.image_id,
        last_sell: VariantItem.variantsItem.last_sell,
        discount: VariantItem.variantsItem.discount,
        duration: VariantItem.variantsItem.duration,
      },
      images: VariantItem.images,
    })
    console.log('willMount', VariantItem);
   
  }
  onSaveVariant = async () => {
    await fetch('https://getmessagetestingwebsite.000webhostapp.com/schedule.php',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ variant: data }),
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

      })
      .catch((error) => {
        console.error(error);
      });
    console.log("AAAAAAA")
  };

  onCancel = () => {

  };
  render() {
    
    // // const { navigation } = this.props;
    // // const VariantItem = navigation.getParam('data');
    // const {
    //   variantItem: {
    //     sku, updated_at, price, inventory_quantity, image_id, last_sell, discount, duration
    //   },
    //   images,
    // } = this.state;
    console.log('afterWillMount', this.state.variantItem);
     const { flag } = this.state;
     const variantImg = this.state.images.find(item => item.id === this.state.variantItem.image_id);
     var _scr = this.state.images[0].src;
     var _inventory_quantity = 0;
     var _discount = this.state.variantItem.discount.toString();
     var _duration = this.state.variantItem.duration.toString();

     if (variantImg !== undefined) {
      _scr = variantImg.src;
    }
    if (this.state.variantItem.inventory_quantity !== null) {
      _inventory_quantity = this.state.variantItem.inventory_quantity;
    }
    // if (flag) {


    // }
    var _updated_at = moment(this.state.variantItem.updated_at).format("DD/MM/YYYY HH:mm:ss");
    // console.log('Bien the ne he', VariantItem);
    // console.log('source hinh ne he', _scr);
    return (
      <ScrollView>
        <View style={styles.content}>
          <Image style={styles.productImgWrapper}
            source={{ uri: _scr }} />
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productWarningTitle}>Sản phẩm này đã {this.state.variantItem.last_sell} ngày không bán được! </Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>SKU: </Text>
            <Text style={styles.productContentText}> {this.state.variantItem.sku} </Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Số lượng còn lại:</Text>
            <Text style={styles.productContentText}> {this.state.variantItem._inventory_quantity} </Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Số lượng bán được: </Text>
            <Text style={styles.productContentText}> {'unknow'} </Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Giá gốc:</Text>
            <Text style={styles.productContentText}> {this.state.variantItem.price} VNĐ </Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Mức chiết khấu: </Text>
            <TextInput containerStyle={styles.inputPercentDiscount} keyboardType='numeric' value={_discount} />
            <Text style={styles.productContentTitle}> %</Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Giá sau chiết khấu: </Text>
            <TextInput containerStyle={styles.inputPercentDiscount} keyboardType='numeric' value={this.state.variantItem.price.toString()} />
            <Text style={styles.productContentTitle}> VNĐ</Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Ngày áp dụng: </Text>
            <TextInput containerStyle={styles.inputPercentDiscount} keyboardType='numeric' value={_duration} />
            <Text style={styles.productContentTitle}> ngày</Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Ngày cập nhật:</Text>
            <Text style={styles.productContentText}> {_updated_at} </Text>
          </View>

          <View style={styles.settingConfirmButtonWrapper}>
            <View style={styles.buttonDelete}>
              <Button

                icon={
                  <Icon
                    name="check-circle"
                    size={15}
                    color="white"
                  />
                }
                title=" Lưu"
                onPress={() => this.onSaveVariant()}
                buttonStyle={styles.buttonSave}
              />
            </View>
            <Button
              icon={
                <Icon
                  name="times-circle"
                  size={15}
                  color="white"
                />
              }
              title=" Hủy"
              onPress={() => this.onCancel()}
              buttonStyle={styles.buttonCancel}
            />

          </View>
        </View>

      </ScrollView>
    );
  }
}
VariantDetailScreen.navigationOptions = {
  title: 'Chi tiết biến thể',
};

const styles = StyleSheet.create({
  buttonCancel: {
    backgroundColor: '#e60000',
    width: 150,
  },
  buttonSave: {
    backgroundColor: '#009900',
    width: 150,
  },

  productImgWrapper: {
    alignSelf: 'center',
    height: 300,
    width: 300,
    backgroundColor: 'black'
  },

  productContentsWrapper: {

    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 30,
    alignItems: 'center'
  },

  inputPercentDiscount: {
    width: 200,
    height: 30,
    color: '#b3d9ff'

  },

  settingConfirmButtonWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 10,
  },
  buttonDelete: {
    marginHorizontal: 10,

  },
  content: {
    flexDirection: 'column',
  },
  productContentTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',

  },
  productWarningTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  productContentText: {
    color: 'black',
    fontSize: 14,
  },

});

