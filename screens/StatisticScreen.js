import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  YellowBox
} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import ProductItem from '../components/ProductItem';
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBPtK8J2KENd0u3XP7NX8ZZokul0LYJagA",
  authDomain: "phoenix-9cc3b.firebaseapp.com",
  databaseURL: "https://phoenix-9cc3b.firebaseio.com",
  projectId: "phoenix-9cc3b",
  storageBucket: "",
  messagingSenderId: "404674819194",
  appId: "1:404674819194:web:e8f7b91e3dbd98a6aef7c3"
};
firebase.initializeApp(firebaseConfig);
YellowBox.ignoreWarnings(['Setting a timer']);


export default class StatisticScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isLoading: false,
      selectedIndex: 0,
      listProducts: [],
      listAlertProducts: [],
    };
    this.updateIndex = this.updateIndex.bind(this)
  };
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  updateSearch = search => {
    this.setState({ search });
  };
  onViewDetail = id => {
    const { listProducts } = this.state;
    const productItem = listProducts.find(item => item.id === id);
    this.props.navigation.navigate('ItemDetail', { data: productItem });
  };
  callFirebase = async () => {

    var _listProducts = [];
    var _listAlertProducts = [];
    await firebase
      .database()
      .ref('/shopOwners/')
      .once('value', function (snapshot) {
        _listProducts = snapshot.val()[0].products;
        for (let item of _listProducts) {
          if (item.label === 1) {
            _listAlertProducts.push(item);
          }
        }
      })
    this.setState({
      listProducts: _listProducts,
      listAlertProducts: _listAlertProducts,
      isLoading: false,
    })
  }
  callApi = async () => {

    const { listProducts } = this.state;
    const API_URL = 'https://getmessagetestingwebsite.000webhostapp.com/product.php?function=products&page=1';
    //const API_URL = 'https://getmessagetestingwebsite.000webhostapp.com/rule.php';
    const response = await fetch(API_URL);
    const jsonResponse = await response.json();
    this.setState({
      isLoading: false,
      listProducts: jsonResponse.products,
    })

  }
  onRefresh = () => {
    this.setState({
      listProducts: [],
      isLoading: true,
    })
    this.callFirebase();
  }
  componentDidMount = () => {
    this.setState({
      isLoading: true,
    });
    this.callFirebase();

  };
  onChangeFilter = (selectedIndex) => {
    const { listAlertProducts, listProducts } = this.state;
    if (selectedIndex === 0)
      return listProducts
    else
      return listAlertProducts
  }
  onChangeFilterTitle = (selectedIndex) => {
    const { listAlertProducts, listProducts } = this.state;
    if (selectedIndex === 0)
      return <Text style={[styles.announceText, { fontStyle: 'italic' }]}>Bạn có {listProducts.length} sản phẩm</Text>
    else
      return <Text style={[styles.announceText, { fontStyle: 'italic' }]}>Bạn có {listAlertProducts.length} hàng tồn báo động!</Text>
  }
  render() {

    const { search, listProducts, isLoading, listAlertProducts } = this.state;
    console.log(listProducts);
    console.log('AlertProduct', listAlertProducts);

    if (isLoading || listProducts === null) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator
            size="large"
            color="black"
            animating={isLoading} />
          <Text style={styles.waitingText}>Đang tải lên sản phẩm của bạn...</Text>
        </View>
      )
    }
    const buttonHeader = ['Tất cả', 'Hàng tồn báo động'];
    const { selectedIndex } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Tìm kiếm..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttonHeader}
          containerStyle={{ height: 30 }}
        />

        <View style={styles.announceTextWrapper}>
          {this.onChangeFilterTitle(selectedIndex)}
        </View>
        <FlatList data={this.onChangeFilter(selectedIndex)}
          renderItem={({ item }) => {
            return <ProductItem data={item} onClick={() => this.onViewDetail(item.id)} />
          }}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={this.onRefresh}
          refreshing={false}
        />

      </View>

    )
  }
};

StatisticScreen.navigationOptions = {
  title: 'Thống kê doanh thu',
};


const styles = StyleSheet.create({

  announceTextWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30

  },

  announceText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#e62e00',

  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
  },
  containerLoading: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',

    paddingTop: 200,
  },
  waitingText: {
    color: 'black',
    justifyContent: 'center',
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center'
  },
  filterButtonWrapper: {
    height: 30,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  buttonAll: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: 'black',
    borderWidth: 0.5
  },
  buttonNotBestSelling: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  filterButtonText: {
    fontSize: 14,
    color: 'black',
    justifyContent: 'center'
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
