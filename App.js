import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import HarcamaEkle from "./screens/HarcamaEkle";
import HarcamaListesi from "./screens/HarcamaListesi";

const Tab = createBottomTabNavigator();

export default function App() {
  const [harcamalar, setHarcamalar] = useState([]);

  const silHarcama = (id) => {
    setHarcamalar(harcamalar.filter((harcama) => harcama.id !== id));
  };

  const toplamHarcama = harcamalar.reduce((toplam, harcama) => {
    return toplam + Number(harcama.tutar);
  }, 0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // navigator'ın otomatik başlığını kapattık, çift başlık bitti
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Harcama Ekle") {
              const iconName = focused ? "add-circle" : "add-circle-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Harcama Listesi") {
              return <MaterialIcons name="list" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#ff5555",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Harcama Ekle">
          {(props) => (
            <HarcamaEkle
              {...props}
              harcamalar={harcamalar}
              setHarcamalar={setHarcamalar}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Harcama Listesi">
          {(props) => (
            <HarcamaListesi
              {...props}
              harcamalar={harcamalar}
              silHarcama={silHarcama}
              toplamHarcama={toplamHarcama}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
