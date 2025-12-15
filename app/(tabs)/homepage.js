import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions,FlatList } from "react-native";
import { Link } from "expo-router";
import { eventData } from "../../assets/images/localdata/fashionstyles";
import {appstyles} from "../../utilities/mainstyle"
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';



function ImageSeperator(){
    return(
        <View style={{width:"100%",height:50}}>

        </View>

        
    
    )
}

export default function Homepage (){
    
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
