import { Ionicons, FontAwesome, FontAwesome5, Entypo ,Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { TouchableOpacity,Alert } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/ProfileScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, ProfileNavigatorParamList, TabTwoParamList } from '../types';
import ProfilePicture from '../components/ProfilePicture';
import CommentScreen from '../screens/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { View } from '../components/Themed';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome name="user" size={24} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-stats-chart" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="bell" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<ProfileNavigatorParamList>();

function ProfileNavigator() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProfileScreen');
  }


  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ProfileScreen"
        component={TabOneScreen}
        options={{

          headerLeftContainerStyle: {

            marginLeft: 13,
            

          },
          headerRightContainerStyle: {
            marginRight: 17,
            

          },

          headerTitle: () => (
            <Ionicons name={"logo-twitter"} size={29} color={Colors.light.tint} />

          ),
          headerLeft: () => (
            <Entypo name="menu" size={32} color='black' />

          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => Alert.alert('Goda Goda !!')}>
            <Feather name="refresh-ccw" size={22} color="black" />
            </TouchableOpacity>
          )
        }}
      />
      <TabOneStack.Screen
        name="Comments"
        component={CommentScreen}
        options={{

          headerLeftContainerStyle: {
            marginLeft: 13,
          
            

          },

        
          headerLeft: () => (

            <TouchableOpacity onPress={onPress}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
          )
        }}
      />


    </TabOneStack.Navigator>


  );


}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
