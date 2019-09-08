
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ItemDetailScreen() {
  return (
    <ScrollView>
      <View style={styles.itemImgWrapper}>
        <Text>This is product img!</Text>
      </View>
      <Text>This is Item Detail Screen!</Text>
    </ScrollView>
  );
}

ItemDetailScreen.navigationOptions = {
  title:'Chi tiết sản phẩm',
};
const styles = StyleSheet.create({

  itemImgWrapper: {
    height: 300,
    width: 300,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginVertical: 10,
  },

  productText: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400'
  },
});

