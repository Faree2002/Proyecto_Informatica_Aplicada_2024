import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

//screen imports
import HomeScreen from "./screens/homeScreen";
import SearchScreen from "./screens/searchScreen";
import RecentSearchScreen from "./screens/recentSearchScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
              return (
                <Entypo name="magnifying-glass" size={size} color={color} />
              );
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
