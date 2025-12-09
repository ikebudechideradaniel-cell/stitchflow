import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions } from "react-native";
import { Link } from "expo-router";
import {appstyles} from "../utilities/mainstyle"

const screenWidth = Dimensions.get("window")


 export default function Index (){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={appstyles.areaView}>
        {/* header*/}
    <View style={appstyles.headerView}>
      <Text style={appstyles.Appname}>STITCH FLOW</Text>
      <Text style={appstyles.Introtext}>your fashion partner</Text>
    </View>
    {/*body*/}
    <View style={appstyles.imgview}>
      <Image
       source = {require("../assets/images/stitchlg.png")}
       style={mystyles.logo}
      />
      </View>
      <View style={mystyles.intro}>
      <Text style={appstyles.Introtext2}>when you choose stitch flow fashion, you' choosing ease,comfort and reliability</Text>
    </View>
    {/* bottom */}
    <View style={{paddingHorizontal:30}}>
      <Link href="/(tabs)/homepage">
      <View style={appstyles.getstartedView}><Text style={appstyles.linkText}>GET STARTED</Text></View>
      </Link>
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
 }

const mystyles = StyleSheet.create({
  logo:{
    width:screenWidth,
    height:420,
    paddingVertical:30,
    backgroundColor:"white",
    resizeMode:"contain"
  },
  intro:{
    paddingBottom:30,
    paddingVertical:10,
  }

})

