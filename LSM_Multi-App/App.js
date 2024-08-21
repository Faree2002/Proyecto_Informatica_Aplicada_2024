import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // StackNavigator para manejar las pantallas
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

//pantallas
import HomeScreen from "./screens/homeScreen";
import SearchScreen from "./screens/searchScreen";
import RecentSearchScreen from "./screens/recentSearchScreen";
import SplashScreen from "./screens/SplashScreen"; // Fabri

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "gray",
      headerTintColor: "#fff",
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#183153",
        height: 60,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="home" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Entypo name="magnifying-glass" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Recent Search"
      component={RecentSearchScreen}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <AntDesign name="clockcircle" size={size} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MainApp" 
          component={MainApp} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
