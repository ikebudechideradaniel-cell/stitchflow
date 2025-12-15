import {SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions,ScrollView,KeyboardAvoidingView,TouchableOpacity,TextInput,Platform } from "react-native";
import { Link } from "expo-router";
import {appstyles} from "../../utilities/mainstyle"
import { useState } from "react";
import { appcolours } from "../../utilities/apptheme";








const MALE_MEASURMENT = [
    {key:"chest",label:"chest",placeholder:"e.g 40"},
    {key:"waist",label:"waist",placeholder:"e.g 20"},
    {key:"hip",label:"hip",placeholder:"e.g 30"},
    {key:"shoulder",label:"shoulder",placeholder:"e.g 36"},
    {key:"sleeve",label:"sleeve",placeholder:"e.g 10"},
    {key:"inseam",label:"inseam",placeholder:"e.g 17.5"},
    {key:"neck",label:"neck",placeholder:"e.g 12.5"},

]
const FEMALE_MEASURMENT = [
    {key:"bust",label:"bust",placeholder:"e.g 40"},
    {key:"waist",label:"waist",placeholder:"e.g 20"},
    {key:"hip",label:"hip",placeholder:"e.g 30"},
    {key:"shoulder",label:"shoulder",placeholder:"e.g 36"},
    {key:"sleeve",label:"sleeve",placeholder:"e.g 10"},
    {key:"inseam",label:"inseam",placeholder:"e.g 17.5"},
    {key:"underbust",label:"underbust",placeholder:"e.g 12.5"},

]


export default function Measurment (){

    const [gender ,setGender] = useState(null)
    const [mearsurments ,setMearsurments] = useState("inches")
    const [unit ,setUnits] = useState({})

    const measurmentFields = gender === "male" ? MALE_MEASURMENT : FEMALE_MEASURMENT ;

    const handleMeasurmentChange = (key,value) => {
        setMearsurments ((prev) => ({
            ...prev,
            [key]:value,
        }));
    };
    const  HandleReset = () => {
        setMearsurments({})
        setGender(null)
        setUnits("inches")
    }

    return(
        <SafeAreaProvider>
           <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style = {{flex:1,paddingBottom:30}}>
                <ScrollView contentContainerStyle = {appstyles.scrollcontent}>
                    {/* header */}
                   <View>
                      <View>
                        <Text style = {appstyles.title}>Measurments Screen</Text>
                        <Text style = {appstyles.subtitle}>kindly provide your body measurments for accurate fitting</Text>
                      </View>
                   </View>
                   {/* gender salection */}
                   <View style = {appstyles.gendersection}>
                     <Text style = {appstyles.gendertitle}>select your gender</Text>
                     <View style = {appstyles.genderView}>
                        <TouchableOpacity
                        style = {[appstyles.genderbtn, gender === "male" && appstyles.genderbtnactive]}
                        onPress={() => {
                            setGender("male")
                            setMearsurments({})

                        }}
                        >
                            <Text style = {[appstyles.gendertext, gender === "male" && appstyles.gendertextactive]}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style = {[appstyles.genderbtn, gender === "female" && appstyles.genderbtnactive]}
                        onPress={() => {
                            setGender("female")
                            setMearsurments({})
                        }}
                        >
                            <Text style = {[appstyles.gendertext, gender === "female" && appstyles.gendertextactive]}>Female</Text> 
                        </TouchableOpacity>
                     </View>
                     {/* unit selection */}
                     <View>
                        <Text style = {appstyles.subtitle}>unit of mearsurments</Text>
                        <View style = {appstyles.genderView}>
                            <TouchableOpacity
                            style = {[appstyles.unitbtn , unit === "inches" && appstyles.unitbtnactive]}
                            onPress={() => {
                                setUnits("inches")
                            }}
                            >
                                <Text
                                style = {[appstyles.unittext, unit === "inches" && appstyles.unittextactive]}
                                >Inches</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => {
                                setUnits("cm")
                            }}
                            style = {[appstyles.unitbtn , unit === "cm" && appstyles.unitbtnactive]}
                            >
                                <Text
                                 style = {[appstyles.unittext, unit === "cm" && appstyles.unittextactive]}
                                >Cetimeters</Text>
                            </TouchableOpacity>
                        </View>
                     </View>
                   </View>
                   {/* measurment inputs */}
                   {
                    gender && (
                        <View style = {appstyles.section}>
                            <Text style = {appstyles.inputTitle}>enter measurment</Text>
                            <Text style={appstyles.unit}>(in {unit === "inches" ? "inches" : "cm" })</Text>
                            {measurmentFields.map((field) => (
                             <View key={field.key}>
                                <Text style={appstyles.label}>{field.label}</Text>
                                <View style={appstyles.inputwrapper}>
                                    <TextInput
                                    placeholder={field.placeholder}
                                    keyboardType="decimal-pad"
                                    style = {appstyles.inputfield}
                                    placeholderTextColor="white"
                                    value={mearsurments[field.key] || ""}
                                    onChangeText={(value) => handleMeasurmentChange(field.key,value)}
                                    />
                                    <Text style={appstyles.munit}>{unit === "inches" ? "inches" : "cm"}</Text>
                                </View>
                                
                    
                    
                             </View>

                            ))
                            
                            }
            
                            
                        </View>
                    )
                   }
                    {/* CALL TO ACTION  */}
                    {gender && (
                        <View style = {appstyles.ctaview}>
                            <TouchableOpacity style = {appstyles.savebtn}>
                                <Text style = {appstyles.ctatext}>save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={HandleReset}
                            
                            style = {appstyles.resetbtn}>
                                <Text style = {appstyles.ctatext}>reset</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
             </KeyboardAvoidingView> 
         </SafeAreaProvider>
    )
}
