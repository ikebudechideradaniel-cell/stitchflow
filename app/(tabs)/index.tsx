import { _View, StyleSheet } from 'react-native';
import { View,Text } from 'react-native';




export default function HomeScreen() {
  return (
  <View style={styles.wrapper}>
    <Text>DAY 2 IN REACT NATIVE</Text>
  </View>
  );
}

const styles = StyleSheet.create({
wrapper:{
  flex : 1,
  backgroundColor:"red",
  alignItems:"center",
  justifyContent:'center'
}
});
