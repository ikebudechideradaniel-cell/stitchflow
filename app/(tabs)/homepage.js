import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions,FlatList } from "react-native";
import { Link } from "expo-router";
import { eventData } from "../../assets/images/localdata/fashionstyles";
import {appstyles} from "../../utilities/mainstyle"
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from "expo-font";


function ImageSeperator(){
    return(
        <View style={{width:"100%",height:50}}>

        </View>

        
    
    )
}

export default function Homepage (){
    const [fontsLoaded] = useFonts({
        "AvegasRoyale-Bold":require("../../assets/images/fonts/AvegasRoyale-Bold.ttf"),
        "AvegasRoyale-BoldItalic":require("../../assets/images/fonts/AvegasRoyale-BoldItalic.ttf"),
        "AvegasRoyale-Italic":require("../../assets/images/fonts/AvegasRoyale-Italic.ttf"),
        "ReilycElegantDemo-Regular":require("../../assets/images/fonts/ReilycElegantDemo-Regular.otf"),
        "AngelicaSignatureDemo":require("../../assets/images/fonts/AngelicaSignatureDemo.otf"),
        // "TYPEW___":require("../../assets/images/fonts/TYPEW___ttf")
    }) 
    if(!fontsLoaded){
        return null 
    }   
    return(
       <SafeAreaProvider>
          <SafeAreaView>
            <View>
                <View style = {appstyles.headerView}><Text style={appstyles.headertext}>DESIGN GALLERY</Text></View>
                <View>
                   <FlatList
                   data={eventData}
                   ItemSeparatorComponent={ImageSeperator}

                   renderItem={({item}) => {
                       return(
                        <View style = {{paddingHorizontal:5}}>
                            <Image
                               source={item.imgurl}
                               style ={appstyles.flatimg}
                            />
                            <View style={appstyles.iconview}>
                                 <Text style={appstyles.designername}> Designer: {item.designer}</Text>
                               <View style ={appstyles.iconDisply}>       
                                    <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="comment" size={24} color="black" />
                                    </TouchableOpacity>
                               </View>
                            
                            </View>
                        </View>
                       )
                   }}
                  
                  />
                </View>
            </View>
          </SafeAreaView>
       </SafeAreaProvider>
        
    )
}
