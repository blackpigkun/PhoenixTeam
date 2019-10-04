
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
} from 'react-native';
import ProductVariants from '../components/ProductVariants';
export default class ItemDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unsoldDate: 0,
    };
  }

  onViewDetail = id => {

    const { navigation } = this.props;
    const ProductItem = navigation.getParam('data');
    const {
      variants, images
    } = ProductItem;
    const variantsItem = variants.find(item => item.id === id);
    this.props.navigation.navigate('VariantDetail', { data: { variantsItem, images } });
  };
  render() {
    const { navigation } = this.props;
    const { unsoldDate } = this.state;
    const ProductItem = navigation.getParam('data');
    const {
      id, images, title, variants
    } = ProductItem;
    console.log(ProductItem);
    console.log(images);
    return (
      <ScrollView>
        <FlatList
          data={images}
          horizontal={true}
          renderItem={({ item }) => {
            return <Image style={styles.img} source={{ uri: item.src }} />
          }}
          keyExtractor={(item, index) => index.toString()} />
        <View style={styles.content}>
          <Text style={styles.productWarningTitle}>Sản phẩm này có {variants.length} biến thể</Text>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Mã sản phẩm:</Text>
            <Text style={styles.productContentText}> {id} </Text>
          </View>
          <View style={styles.productContentsWrapper}>
            <Text style={styles.productContentTitle}>Tên sản phẩm:</Text>
            <Text style={styles.productContentText}> {title} </Text>

          </View>
        </View>
        <FlatList
          data={variants}
          renderItem={({ item }) => {
            return <ProductVariants data={item} img={images} onClick={() => this.onViewDetail(item.id)} />
          }}
          keyExtractor={(item, index) => index.toString()} />

      </ScrollView>
    );
  };
}

ItemDetailScreen.navigationOptions = {
  title: 'Chi tiết sản phẩm',
};
const styles = StyleSheet.create({

  itemImgWrapper: {
    height: 300,
    width: 300,
    backgroundColor: 'blue',
    marginVertical: 10,
  },

  img: {
    height: 300,
    width: 300,
    backgroundColor: '#d7d7d7',
    marginVertical: 10,
    marginHorizontal: 10
  },
  productContentTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',

  },
  productContentsWrapper: {

    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 30,
    alignItems: 'center'
  },
  productWarningTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingHorizontal:10,
  },
  productContentText: {
    color: 'black',
    fontSize: 14,
  },

  content: {
    flexDirection: 'column',
  },
  productText: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400'
  },
});

