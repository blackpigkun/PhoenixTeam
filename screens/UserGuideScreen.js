import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import HistoryItem from '../components/HistoryItem';
import firebase from "firebase";

export default class UserGuideScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.content}>
      <ScrollView>
        <Text> “Thiết lập điều kiện” là thao tác duy nhất bạn phải làm khi sử dụng ứng dụng Cập nhật giá động hàng tồn kho, do đó đây thật sự là bước quan trọng, là tiền đồ để ứng dụng của chúng tôi giúp bạn tiện lợi hơn, dễ dàng hơn trong việc quản lý sản phẩm của mình. Để giúp bạn hiểu rõ và dễ dàng hoàn thành công đoạn quan trọng này, dưới đây chúng tôi sẽ giải thích và hướng dẫn bạn một cách thật chi tiết. </Text>
        <Image style={styles.img} source={{uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/71949086_2396024080718104_2795468009647374336_n.jpg?_nc_cat=103&_nc_eui2=AeHpVpFSD9RnKpRdz-MWzOJv_GV3OJ0KiSWqwvNf3NwmwhRIcCbfmV30Q_8YTFc3Ym807djGjKt_tNugCNaXpiyyBhJdHFlctHmBVZKy_VWyoA&_nc_oc=AQkBXgFcIFQ2tfEC9w-7HNcgm4tX2LByRmGvsVgz-eqNluN8DkM_HYbD3jHBU68Jzi0&_nc_ht=scontent.fsgn2-2.fna&oh=b7103c8568644d31b951b77233d6399f&oe=5E2B1136'}}/>
      <Text>1. Bật/ tắt chế độ tự động cập nhật giá dựa vào điều kiện đã nhập</Text>
      <Text>2. Số ngày không bán được  (đơn vị: ngày): Số ngày liên tục không bán được của sản phẩm.</Text>
      <Text>3. Mức chiếc khấu (đơn vị: %): Mức chiếc khấu bạn muốn áp dụng lên sản phẩm khi nó thỏa điều kiện Số ngày tương ứng.</Text>
      <Text>4. Số ngày áp dụng (đơn vị: ngày): Số ngày áp dụng mức giá sau khi được chiếc khấu của sản phẩm. Giá trị mặc định là 30 ngày. </Text>
      <Text>5. Xóa dữ liệu ở dòng tương ứng.</Text>
      <Text>6. Nút thêm: Giúp bạn tăng thêm mức điều kiện.</Text>
      <Text>7. Lưu điều kiện sau khi nhập hoặc chỉnh sửa.</Text>
      <Text>8. Hoàn tác lại khi bạn không muốn cập nhật điều kiện.</Text>
      </ScrollView>
      </View>
    );
  }
}

UserGuideScreen.navigationOptions = {
  title: 'Hướng dẫn thiết lập',
};
const styles = StyleSheet.create({
  content: {
    marginHorizontal:10,
    marginVertical:10,
    flexDirection:'column',
    alignContent:'center',

  },
  img: {
    height: 500,
    width: 300,
    backgroundColor: '#d7d7d7',
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf:'center'
  },
 
});

