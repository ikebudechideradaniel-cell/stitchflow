import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
        "AvegasRoyale-Bold":require("../assets/images/fonts/AvegasRoyale-Bold.ttf"),
        "AvegasRoyale-BoldItalic":require("../assets/images/fonts/AvegasRoyale-BoldItalic.ttf"),
        "AvegasRoyale-Italic":require("../assets/images/fonts/AvegasRoyale-Italic.ttf"),
        "ReilycElegantDemo-Regular":require("../assets/images/fonts/ReilycElegantDemo-Regular.otf"),
        "AngelicaSignatureDemo":require("../assets/images/fonts/AngelicaSignatureDemo.otf"),
        //  "paterna":require("../assets/images/fonts/paterna.otf")
    }) 
    if(!fontsLoaded){
        return null 
    }
    
    
  return (
    <SafeAreaProvider>
      <Stack>
         { <Stack.Screen
        name="(tabs)"
        options={{ 
          headerShown:false,
           title:"tabs"
        }}
        />  }
        <Stack.Screen
        name="index"
        options={{
          headerShown:false,
          title:"index"
        }}
        />
    </Stack>
    </SafeAreaProvider>
  )
}

