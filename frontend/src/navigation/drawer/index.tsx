import CustomDrawer from "../../zynerator/CustomDrawer/CustomDrawer";
import HomeScreen from "../../component/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import TechnicienAdmin from "../../component/admin/view/collaborateur/technicien/container/technicien-container-admin.component";
import SiteImageAdmin from "../../component/admin/view/site/site-image/container/site-image-container-admin.component";
import ModeAccesAdmin from "../../component/admin/view/site/mode-acces/container/mode-acces-container-admin.component";
import SiteAdmin from "../../component/admin/view/site/site/container/site-container-admin.component";
import AboutScreen from "../../component/AboutScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (

        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#ffa500',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontWeight: 'bold',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Technicien"
                component={TechnicienAdmin}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="SiteImage"
                component={SiteImageAdmin}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="ModeAcces"
                component={ModeAccesAdmin}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Site"
                component={SiteAdmin}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>

    );
}

export default DrawerNavigation;
