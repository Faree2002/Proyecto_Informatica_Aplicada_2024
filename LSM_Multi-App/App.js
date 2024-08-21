import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen imports
import HomeScreen from "./screens/homeScreen";
import SearchScreen from "./screens/searchScreen";
import RecentSearchScreen from "./screens/recentSearchScreen";

// icon imports
import HomeIcon from './assets/icons/Home.png';
import SearchIcon from './assets/icons/Search.png';
import FavoriteIcon from './assets/icons/favorite.png';

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
            tabBarIcon: ({ color, size }) => (
              <Image source={HomeIcon} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={SearchIcon} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="Recent Search"
          component={RecentSearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={FavoriteIcon} style={{ width: size, height: size, tintColor: color }} />
            ),
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
