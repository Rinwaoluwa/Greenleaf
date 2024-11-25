import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import { Ionicons } from '@expo/vector-icons';

import DefaultScreen from "../screens/DefaultScreen";
import { normalise } from "../design-system/theme/responsive";

const BottomTab = createBottomTabNavigator();

function MainStack() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "green",
                tabBarHideOnKeyboard: true,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={DefaultScreen}
                options={{
                    tabBarIcon: ({ color }: any) => <Ionicons name="home" color={color} size={normalise(24)} />,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }: any) => <Ionicons name="search" color={color} size={normalise(24)} />,
                }}
            />
            <BottomTab.Screen
                name="Trend"
                component={DefaultScreen}
                options={{
                    tabBarIcon: ({ color }: any) => <Ionicons name="trending-up-outline" color={color} size={normalise(24)} />,
                }}
            />
            <BottomTab.Screen
                name="Order"
                component={DefaultScreen}
                options={{
                    tabBarIcon: ({ color }: any) => <Ionicons name="list-outline" color={color} size={normalise(24)} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={DefaultScreen}
                options={{
                    tabBarIcon: ({ color }: any) => <Ionicons name="person-outline" color={color} size={normalise(24)} />,
                }}
            />

        </BottomTab.Navigator>
    );
}

export default MainStack;