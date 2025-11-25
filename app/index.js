import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions } from "react-native";
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window")


 export default function Index (){
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        {/* header*/}
    <View>
      <Text>STITCH FLOW</Text>
      <Text>your fashion partner</Text>
    </View>
    {/*body*/}
    <View>
      <Image
       source = {require("../assets/images/stitchlg.png")}
       style={mystyles.logo}
      />
      </View>
      <View>
      <Text>when you choose stitch flow fashion you are choosing ease,comfort and reliability</Text>
    </View>
    {/* bottom */}
    <View>
      <Link href={""}>
      <Text>GET STARTED</Text>
      </Link>
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
 }

const mystyles = StyleSheet.create({
  logo:{
    width:screenWidth,
    height:420
  }

})