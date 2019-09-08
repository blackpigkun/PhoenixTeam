import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import ProductItem from '../components/ProductItem'
export default class StatisticScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
    };
  };
  
  updateSearch = search => {
    this.setState({ search });
  };
  onClickProductItem = id => {
    this.props.navigation.navigate('ItemDetail', {});
  };
  render() {
    
    const { search } = this.state;

    var products = [];

    for (let i = 0; i < 20; i++) {

      products.push(
        <ProductItem onClick={() => this.onClickProductItem()} />
      )
      var firstPage = '<<';

      var prePage = '<';

      var lastPage = '>>';

      var followPage = '>';

    }
    return (
      <View style={styles.container}>
        <SearchBar
           placeholder="Tìm kiếm..."
           onChangeText={this.updateSearch}
           value={search}
           lightTheme={true}
        />
        <ScrollView>
          {products}

        </ScrollView>
      </View>

    )
  }
};

StatisticScreen.navigationOptions = {
  title: 'Thống kê doanh thu',
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#666666',
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
  },
  headTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d9d9d9',

  },

  headTitleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  },

  paging: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  pagingButton: {
    height: 30,
    width: 40,
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
