import { Tabs } from "expo-router";
 export default function _Layout(){
    <Tabs>
        <Tabs.Screen
        name="homepage"
        options={{
            headerShown:true,
            title:"FEEDS"

        }}
        />
        <Tabs.Screen
        name="measurments"
        options={{
            headerShown:true,
            title:"measurments"
        }}
        />
        <Tabs.Screen
        name="history"
        options={{
            headerShown:true,
            title:"history"
        }}
        />
        <Tabs.Screen
        name="settings"
        options={{
            headerShown:true,
            title:"settings"
        }}
        />
</Tabs>

}
